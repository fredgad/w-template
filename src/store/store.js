import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
        state: {
            directionTo: 'green',
            greenTimer: 15,
            yellowTimer: 3,
            redTimer: 10,
            greenCheck: true,
            yellowCheck: true,
            redCheck: true
        },
        mutations: {
            // setCheck: (state, color) => {
            //     switch(color) {
            //     case 'green': 
            //         state.yellowTimer = 3,
            //         state.redTimer = 10
            //         break
            //     case 'yellow':
            //             state.greenTimer = 15,
            //             state.redTimer = 10
            //         break
            //     case 'red':
            //         state.greenTimer = 15,
            //         state.yellowTimer = 3
            //         break
            //     } 
            // },
            setDirection: (state, val) => state.directionTo = val,
            setTimers: (state, color) => {
                switch(color) {
                case 'green': 
                    state.yellowTimer = 3
                    state.redTimer = 10
                    state.greenCheck = false
                    setTimeout(()=> {
                        state.greenCheck = true
                    },950)
                    break
                case 'yellow':
                    state.greenTimer = 15
                    state.redTimer = 10
                    state.yellowCheck = false
                    setTimeout(()=> {
                        state.yellowCheck = true
                    },950)
                    break
                case 'red':
                    state.greenTimer = 15
                    state.yellowTimer = 3
                    state.redCheck = false
                    setTimeout(()=> {
                        state.redCheck = true
                    },950)
                    break
                }
            },
            decrement: (state, colorTimer) => {
                switch(colorTimer) {
                case 'greenTimer': 
                    if(state.greenTimer > 0) {
                        state.greenTimer--
                    }
                    break
                case 'yellowTimer':
                    if(state.yellowTimer > 0) {
                        state.yellowTimer--
                    } 
                    break
                case 'redTimer':
                    if(state.redTimer > 0) {
                        state.redTimer--
                    } 
                    break
                }
            }
        },
        actions: {
            setLocation(newLocation) {
                location.href = newLocation;
                location.hash = newLocation;
            }
        },
        getters: {
            get(state) {
                return state
            }
        }
});

export default store