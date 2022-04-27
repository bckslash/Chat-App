function DefaultButton({ onclick, children }: any) {
    return (
        <button
            onClick={onclick}
            className="rounded-full p-3 text-center transition-colors duration-200 ease-in-out hover:bg-gray-300 active:bg-gray-400"
        >
            {children}
        </button>
    );
}

export default DefaultButton;
