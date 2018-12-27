
import jsonp from 'superagent-jsonp'
import request from 'superagent'
import Vue from 'vue'
import Axios from 'axios'
Vue.prototype.$axios = Axios
Axios.defaults.baseURL = '/api'
Axios.defaults.headers.post['Content-Type'] = 'application/json';
Vue.config.productionTip = false

const state = {
  events: [],
  temp: [],
  skip: 0,
  eventItem: {},
  num:999
}

const mutations = {
  loadMore(state, payload) {
    state.skip += 3
    state.events = state.events.concat(payload.res)
  },
}


const actions = {
  loadMore({commit, state}) {
     var url = 'https://api.douban.com/v2/event/list?loc=108288&start=' +state.skip + '&count=6';
    // Axios.get(url)
    // .then(function (response) {
    //   console.log(response);
    //   if(response){
    //       commit({
    //         type: 'loadMore',
    //         response: response.data.events
    //       })
    //   }
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
    request
      .get(url)
      .use(jsonp({timeout: 1000}))
      .end((err, res) => {
        if (!err) {
        	console.log(res)
          commit({
            type: 'loadMore',
            res: res.body.events
          })
        }
      })
  },
}

export default {
  state,
  mutations,
  actions
}
