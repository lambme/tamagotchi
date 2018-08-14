const initialState = {
    time: 0.0,
    happiness: 0.0,
    body: {
        type: 'round',
        r: 80.0,
        x: 100.0,
        y: 100.0,
        color: [0x88, 0xcc, 0xff],
        attachments: [
            {
                type: 'round',
                r: 10.0,
                x: -30.0,
                y: -50.0,
                color: [0xff, 0xff, 0xff],
                attachments: [
                    {
                        type: 'round',
                        r: 6.0,
                        x: 0.0,
                        y: 0.0,
                        color: [0x00, 0x00, 0x00]
                    }
                ]
            },
            {
                type: 'round',
                r: 10.0,
                x: 30.0,
                y: -50.0,
                color: [0xff, 0xff, 0xff],
                attachments: [
                    {
                        type: 'round',
                        r: 6.0,
                        x: 0.0,
                        y: 0.0,
                        color: [0x00, 0x00, 0x00]
                    }
                ]
            },
            {
                type: 'round',
                r: 16.0,
                x: 0.0,
                y: -30.0,
                color: [0x88, 0x77, 0xee],
                attachments: [
                    {
                        type: 'round',
                        r: 5.0,
                        x: -6.5,
                        y: 6.0,
                        color: [0x00, 0x00, 0x44]
                    },
                    {
                        type: 'round',
                        r: 5.0,
                        x: 6.5,
                        y: 6.0,
                        color: [0x00, 0x00, 0x44]
                    }
                ]
            },
            {
                type: 'smile',
                r: 40.0,
                x: 0.0,
                y: 30.0,
                color: [0x55, 0x00, 0x00]
            }
        ]
    }
};

const reducer = (state = initialState, action) => {
    if (action.type === 'FEED') {
        return {
            ...state,
            happiness: state.happiness + 1
        }
    }
    if (action.type === 'TICK') {
        return {
            ...state,
            happiness: state.happiness - action.dt*0.25,
            time: state.time + action.dt,
        }
    }
    return state;
}

export default reducer;
