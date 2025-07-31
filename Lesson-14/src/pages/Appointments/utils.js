// Function to get status styling
const getStatusStyles = (status) => {
  switch (status) {
    case "scheduled":
      return {
        bg: "bg-blue-100",
        text: "text-blue-800",
        dot: "bg-blue-400",
        label: "Заплановано",
      };
    case "active":
      return {
        bg: "bg-green-100",
        text: "text-green-800",
        dot: "bg-green-400",
        label: "Активний",
      };
    case "completed":
      return {
        bg: "bg-gray-100",
        text: "text-gray-800",
        dot: "bg-gray-400",
        label: "Завершено",
      };
    case "cancelled":
      return {
        bg: "bg-red-100",
        text: "text-red-800",
        dot: "bg-red-400",
        label: "Скасовано",
      };
    default:
      return {
        bg: "bg-gray-100",
        text: "text-gray-800",
        dot: "bg-gray-400",
        label: "Невідомо",
      };
  }
};

// Format date
const formatDate = (dateString) => {
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString("uk-UA", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return dateString;
  }
};

const formatTime = (dateString) => {
  try {
    const date = new Date(dateString);
    return date.toLocaleTimeString("uk-UA", {
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return "";
  }
};

export { getStatusStyles, formatDate, formatTime };
