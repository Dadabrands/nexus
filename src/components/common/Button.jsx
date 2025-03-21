function Button({ children, className = "", ...props }) {
    return (
      <button
        className={`bg-blue text-white font-medium py-3 px-6 rounded-full flex items-center gap-2 hover:bg-blue-600 transition-colors ${className}`}
        {...props}
      >
        {children}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    );
  }
  
  export default Button;