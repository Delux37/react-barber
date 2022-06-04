function AuthWrapper({ children }) {
    return (
        <div
            className='
              w-2/4 max-w-xl
              absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2
              border border-gray-300 rounded
              shadow-xl p-10
              '
              >
            {children}
        </div>
    )
}

export default AuthWrapper;