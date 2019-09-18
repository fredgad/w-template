export default {
    state: {
        color: 'green',
        nextColor: 'yellow',
        afterNextColor: 'red',
        greenTimer: 15,
        yellowTimer: 3,
        redTimer: 10
    },
    actions: {
        setLocation(location) {
            location.href = location;
            location.hash = location;
        }
    },
    mutations: {
        set(state, { type, items }) {
            state[type] = items
        }
    },
    getters: {
        data(state) {
            return state
        }
    }
}