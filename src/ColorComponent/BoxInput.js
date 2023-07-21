import React from 'react'

const BoxInput = ({ color, setColor, handleToggle }) => {
    return (

        <form onSubmit={e => e.preventDefault()}>
            <input
                autoFocus
                type='text'
                className='box-input'
                value={color}
                required
                onChange={(e) => setColor(e.target.value)}
            />

            <button
                className='box-toggle'
                onClick={handleToggle}

            >Change Font Color</button>
        </form>

    )
}

export default BoxInput
