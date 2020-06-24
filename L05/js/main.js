var vue = new Vue({
    el: '#app1',
    data: {
        countries: null,
        cid: 0,
        //idd: null
    },
    mounted: function () {
        axios.get(
            'http://developer.kensnz.com/getcountrydata')
            .then(response =>
                (this.countries = response.data)
            )
            .catch((error) => {
                this.countries = "people not available";
                console.log(error)
            })
    },
    methods: {
        altimage: function (e) {
            alert("err");
            e.target.src = "./flags/blank.gif"
        },

        getUrl: function (id) {
            var URL = "./flags/";
            var fi = ".gif";
            var ppp = URL.concat(id > 0 ? this.countries[id - 1].Code : "");
            var final = ppp.concat(fi);



            return final;

        },
        cName: function (id) {


            return id > 0 ? this.countries[id - 1].Name : "";
        },
        cHeadOfState: function (id) {


            return id > 0 ? this.countries[id - 1].HeadOfState : "";
        },
        cIndepYear: function (id) {


            return id > 0 ? this.countries[id - 1].IndepYear : "";
        },
        cLocalName: function (id) {


            return id > 0 ? this.countries[id - 1].LocalName : "";
        },
        cRegion: function (id) {


            return id > 0 ? this.countries[id - 1].Region : "";
        },
        // personEmail: function (id) {
        //     return id > 0 ? this.people[id - 1].email : "";
        // },
        // personPhone: function (id) {
        //     return id > 0 ? this.people[id - 1].phone : "";
        // },
        // personWebsite: function (id) {
        //     return id > 0 ? this.people[id - 1].website : "";
        // },
        // personAddress: function (id) {
        //     return id > 0 ? this.people[id - 1].address.city : "";
        // }
    }
})
