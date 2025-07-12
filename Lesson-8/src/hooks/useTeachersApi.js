import { useCallback, useState } from "react";
import apiRoutes from "../api/apiRoutes";
import axios from "axios";

const useTeachersApi = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchTeachers = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get(apiRoutes.getAllTeachers);
      setData(res.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, []);

  const getTeacherById = useCallback(async (teacherId) => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get(apiRoutes.getTeacherById(teacherId));
      setData(res.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, []);

  const updateTeacher = useCallback(async (teacherId, data) => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.put(apiRoutes.deleteTeacher(teacherId), data);
      setData(res.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, []);

  const deleteTeacher = useCallback(async (teacherId) => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.delete(apiRoutes.deleteTeacher(teacherId));
      fetchTeachers();
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, []);

  const addTeacher = useCallback(async (data) => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.post(apiRoutes.addTeacher, data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, []);
  //   ------------
  return {
    data,
    loading,
    error,
    fetchTeachers,
    getTeacherById,
    updateTeacher,
    deleteTeacher,
    addTeacher,
  };
};

export default useTeachersApi;
