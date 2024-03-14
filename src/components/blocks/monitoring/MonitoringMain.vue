<script setup>

</script>

<template>
    <div class="mon-container">
        <div class="header">
                <h1>Мониторинг</h1>
        </div>
        <div class="inputBlock">
            <select class="form-select" aria-label="Default select example">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
              <select class="form-select" aria-label="Default select example">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            
        </div>
        <div class="live">
           
        </div>

    </div>
    
</template>

<style lang="scss" scoped>
.mon-container{
    width: 100%;
    height: 100%;

    .inputBlock{
        padding: 1rem 2rem;
        select{
            margin: 1rem auto;
        }
    }

    .live{
        background: url('../../../assets/back.png');
        width: 100%;
        height: 60vh;
    }
}
</style>