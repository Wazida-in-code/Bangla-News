const loading = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#000000]">
      
      <div className="flex flex-col items-center gap-4">
        
        {/* Spinner */}
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-[#232732] border-t-red-400"></div>
        {/* Loading text */}
        <p className="text-sm font-bold uppercase tracking-widest text-white">
          
          Loading...
        </p>
      </div>
    </div>
  );
};

export default loading;
