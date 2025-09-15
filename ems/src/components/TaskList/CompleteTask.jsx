const CompleteTask = ({ data }) => {
  return (
    <div className="flex-shrink-0 h-full w-[300px] p-5 bg-white/10 backdrop-blur-lg border border-gray-700 rounded-2xl shadow-lg hover:scale-[1.02] transition-transform">
      <div className="flex justify-between items-center">
        <h3 className="bg-gradient-to-r from-green-500 to-emerald-500 text-xs px-3 py-1 rounded-full text-white font-medium">
          {data.category}
        </h3>
        <h4 className="text-sm text-gray-400">{data.taskDate}</h4>
      </div>
      <h2 className="mt-5 text-xl font-semibold text-green-400">{data.taskTitle}</h2>
      <p className="text-sm mt-2 text-gray-300">{data.taskDescription}</p>
      <div className="mt-6">
        <button className="w-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-xl font-medium py-2 text-sm text-white shadow-md">
          Completed ✅
        </button>
      </div>
    </div>
  )
}

export default CompleteTask
