<template>
    <navbar />
    <div class="Rect">
        <div class="rect1">
        <h1>ARTICLES</h1>
            <div class="inrect" >
                {{ x }}
            </div>
        </div>
    </div>
    
</template>

<script>
import navbar from '@/views/navbar.vue';
import CompendiumApi from '../../api/compendium-api';

export default  {
    components: { navbar },
    data() {
        return {
            doc_details: [],
            x: []
        }
    },

    methods() {
        const [isloading, setIsLoading] = ref(true);
        const [doc_details, setdoc_details] = ref([]);

            {doc_details.map((doc_details, index) =>
                <tr key={index}>
                    <td><h2>{doc_details.title}</h2></td>
                </tr>
            )};
    },
    async mounted() {
        const testResult = await CompendiumApi.View();
        this.x = testResult.data;
        console.log(testResult.data);
    }
}
</script>

<style scoped>
.Rect {
    height: 700px;
    width: 1500px;
    background: #ffffff;
    padding: 25px;
    position: relative;
    top: -10px;
    left: -10px;
}
.rect1 {
    height: auto;
    width: 1450px;
    background: #ffffff;
    padding: 25px;
    position: relative;
    top: -10px;
    left: -10px;
}
.rect1 h1 {
    text-align: left;
    color: #373737;
}
.inrect {
    height: auto;
    width: 1370px;
    border-radius: 25px;
    background: #707070;
    padding: 25px;
    position: relative;
    top: -10px;
    left: 10px;
}
nav {
    position: relative;
    left: -300px;
}
.Article h2{
    background: #f4f4f4;
    padding: 20px;
    border-radius: 10px;
    margin: 10px auto;
    max-width: 600px;
    cursor: pointer;
    color: #444;
}
.Article h2:hover {
    background: #ddd;
}
.Article a{
    text-decoration: none;
}
.Article p {
    text-align: left;
    color: #000;
}
</style>
