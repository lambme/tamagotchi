const initialState = {
    time: 0.0,
    body: {
        type: 'flesh',
        x: 100.0,
        y: 100.0,
        r: 80.0,
        color: [0x88, 0xcc, 0xff],
        attachments: [
            {
                type: 'eye',
                x: -30.0,
                y: -50.0,
                r: 10.0,
                eye: 'left'
            },
            {
                type: 'eye',
                x: 30.0,
                y: -50.0,
                r: 10.0,
                eye: 'right'
            },
            {
                type: 'nose',
                x: 0.0,
                y: -30.0,
                r: 16.0,
                color: [0x88, 0x77, 0xee]
            },
            {
                type: 'mouth',
                x: 0.0,
                y: 30.0,
                r: 40.0
            }
        ]
    },
    controller: {
        mouth: {
            smile: 0.0,
            open: 0.0,
            direction: [0.0, 0.0]
        },
        nose: {
        },
        eyes: {
            left: {
                pupil: 0.5,
                direction: [0.4, 0.0]
            },
            right: {
                pupil: 0.25,
                direction: [-0.4, 0.0]
            }
        }
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
        const time = state.time + action.dt;
        const controller = {
            mouth: {
                smile: Math.sin(time*0.333),
                open: 0.5 + 0.5*Math.sin(time*3.0),
                direction: [0.0, 0.0]
            },
            nose: {
            },
            eyes: {
                left: {
                    pupil: 0.5 + Math.sin(time*0.5)*0.2,
                    direction: [Math.sin(time*2.111)*Math.sin(time*0.553), Math.cos(time*2.111)*Math.sin(time*0.553)]
                },
                right: {
                    pupil: 0.5 + Math.sin(time*0.777)*0.2,
                    direction: [Math.sin(-time*0.456), Math.cos(-time*0.456)]
                }
            }            
        }
        return {
            ...state,
            controller: controller,
            time: time,
        }
    }
    return state;
}

export default reducer;
