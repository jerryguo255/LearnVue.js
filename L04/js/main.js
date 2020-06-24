var vue = new Vue({
    el: '#app1',
    data: {
        people: null,
        sid: 0,
        //idd: null
    },
    mounted: function () {
        axios.get(
            'http://jsonplaceholder.typicode.com/users')
            .then(response =>
                (this.people = response.data)
            )
            .catch((error) => {
                this.people = "people not available";
                console.log(error)
            })
    },
    methods: {
        personName: function (id) {


            return id > 0 ? this.people[id - 1].name : "";
        },
        personEmail: function (id) {
            return id > 0 ? this.people[id - 1].email : "";
        },
        personPhone: function (id) {
            return id > 0 ? this.people[id - 1].phone : "";
        },
        personWebsite: function (id) {
            return id > 0 ? this.people[id - 1].website : "";
        },
        personAddress: function (id) {
            return id > 0 ? this.people[id - 1].address.city : "";
        }
    }
})
