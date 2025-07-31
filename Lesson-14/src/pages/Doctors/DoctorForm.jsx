import { useEffect, useState } from "react";
import { emptyDoctorData } from "./settings";
import { useNavigate, useParams } from "react-router";
import {
  useAddDoctorMutation,
  useGetDoctorByIdQuery,
  useUpdateDoctorMutation,
} from "@/api";
import { frontRoutes } from "@/router/frontRoutes";

function DoctorForm() {
  const { id } = useParams();
  const { data: doctorData, isLoading, error } = useGetDoctorByIdQuery(id);

  const [formData, setFormData] = useState(() => emptyDoctorData);

  useEffect(() => {
    if (doctorData) setFormData(doctorData);
  }, [doctorData]);

  const handleInputChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const navigate = useNavigate();

  const [addDoctor, { isLoading: isAddLoading, error: errorAdding }] =
    useAddDoctorMutation();
  const [updateDoctor, { isLoading: isUpdateLoading, error: errorUpdating }] =
    useUpdateDoctorMutation();

  const isSaving = isAddLoading || isUpdateLoading;
  const isFormLoading = isLoading || isSaving;
  const onSave = async () => {
    if (id) {
      try {
        await updateDoctor(formData);
      } catch (error) {
        return console.log(error);
      }
    } else {
      try {
        await addDoctor(formData);
      } catch (error) {
        return console.log(error);
      }
    }
    navigate(frontRoutes.navigate.doctors.base);
  };

  const onDismiss = () => {
    navigate(frontRoutes.navigate.doctors.base);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Loading State for all operations */}
      {id && isFormLoading && (
        <div className="flex items-center justify-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600"></div>
          <span className="ml-3 text-gray-600">
            {isLoading
              ? "Завантаження даних лікаря..."
              : isSaving && id
              ? "Збереження змін..."
              : isSaving
              ? "Додавання лікаря..."
              : "Завантаження..."}
          </span>
        </div>
      )}

      {/* Main content - hide while loading */}
      {!isFormLoading && (
        <>
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-green-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  {id ? "Змінити відомості про лікаря" : "Додати нового лікаря"}
                </h1>
                <p className="text-gray-600">
                  {id
                    ? "Внесіть зміни у відомості про працівника"
                    : "Заповніть інформацію про медичного працівника"}
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="space-y-8">
            {/* Personal Information Section */}
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <svg
                    className="w-5 h-5 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h2 className="text-xl font-semibold text-gray-900">
                  Особиста інформація
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Повне ім'я <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Микола Сидоренко"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors duration-200"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Спеціальність <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="specialty"
                    value={formData.specialty}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors duration-200"
                  >
                    <option value="">Оберіть спеціальність</option>
                    <option value="Кардіолог">Кардіолог</option>
                    <option value="Невролог">Невролог</option>
                    <option value="Терапевт">Терапевт</option>
                    <option value="Хірург">Хірург</option>
                    <option value="Педіатр">Педіатр</option>
                    <option value="Офтальмолог">Офтальмолог</option>
                    <option value="Отоларинголог">Отоларинголог</option>
                    <option value="Гінеколог">Гінеколог</option>
                    <option value="Уролог">Уролог</option>
                    <option value="Дерматолог">Дерматолог</option>
                    <option value="Психіатр">Психіатр</option>
                    <option value="Анестезіолог">Анестезіолог</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Contact Information Section */}
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                  <svg
                    className="w-5 h-5 text-purple-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <h2 className="text-xl font-semibold text-gray-900">
                  Контактна інформація
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Електронна пошта <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    type="email"
                    placeholder="mykola.syd@med.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors duration-200"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Телефон <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    type="tel"
                    placeholder="+380631234567"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors duration-200"
                  />
                </div>
              </div>
            </div>

            {/* Work Information Section */}
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
                  <svg
                    className="w-5 h-5 text-indigo-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm3 2h2v4H7V6zm6 0h2v4h-2V6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h2 className="text-xl font-semibold text-gray-900">
                  Робоча інформація
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Номер кабінету
                  </label>
                  <input
                    name="room"
                    value={formData.room}
                    onChange={handleInputChange}
                    type="text"
                    placeholder="202"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors duration-200"
                  />
                </div>
              </div>
            </div>

            {/* Additional Information Section */}
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                  <svg
                    className="w-5 h-5 text-gray-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h2 className="text-xl font-semibold text-gray-900">
                  Додаткова інформація
                </h2>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Примітки
                </label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Кардіоогляд по понеділках"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors duration-200 resize-none"
                />
                <p className="text-sm text-gray-500 mt-2">
                  Додайте будь-яку важливу інформацію про лікаря
                </p>
              </div>
            </div>

            {/* Form Actions */}
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex flex-col sm:flex-row sm:justify-end space-y-3 sm:space-y-0 sm:space-x-3">
                <button
                  onClick={onDismiss}
                  className="w-full sm:w-auto px-6 py-3 border border-gray-300 text-gray-700 bg-white rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors duration-200 font-medium"
                >
                  Скасувати
                </button>
                <button
                  onClick={onSave}
                  className="w-full sm:w-auto px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors duration-200 font-medium shadow-sm"
                >
                  {id ? "Зберегти" : "Додати"}
                </button>
              </div>
            </div>

            {/* Required Fields Notice */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-start">
                <div className="w-5 h-5 text-blue-600 mt-0.5 mr-3">
                  <svg fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-blue-900 mb-1">
                    Обов'язкові поля
                  </h3>
                  <p className="text-sm text-blue-700">
                    Поля, позначені зірочкою (*), є обов'язковими для
                    заповнення. Переконайтесь, що вся інформація введена
                    правильно.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default DoctorForm;
