<template>
    <section id="controller">
        <router-link to="/green"><div class="green"></div></router-link>
        <router-link to="/yellow"><div class="yellow"></div></router-link>
        <router-link to="/red"><div class="red"></div></router-link>
    </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
#controller {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 200px;
    height: 300px;
    position: relative;
    top: calc(100vh - 200px);
    background: #eee;
    border: 2px solid #888;
    border-radius: 10px;

    div {
        height: 50px;
        width: 50px;
        background: #fff;
        border-radius: 12.5px;
        box-shadow: 0 0 7px #222, inset -3px -3px 5px 3px #222;
        transition: .4s;
        margin-top: 5px;
    }
    div:hover {
        box-shadow: 0 0 0px #222, inset 3px 3px 5px 3px #222;
    }
    .green {
        background-color: green;
    }
    .yellow {
        background-color: yellow;
    }
    .red {
        background-color: red;
    }
}
</style>