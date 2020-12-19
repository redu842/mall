import axios from "axios";

export function request(config) {
  const instance = axios.create({
    baseURL: "http://152.136.185.210:7878/api/m5",
    timeout: 5000,
  });
  //   拦截器;
  //   instance.interceptors.request.use(
  //     (config) => {
  //       // console.log(config);
  //       return config;
  //     },
  //     (err) => {
  //       // console.log(err);
  //     }
  //   );
  instance.interceptors.response.use(
    (res) => {
      return res.data;
    },
    (err) => {
      console.log(err);
    }
  );
  return instance(config);
}

// export function request(config) {                        在此版本中我们使用了promise 但是axios本身就会返回因此不需要 在后期调用时可以直接使用then 和catch
//   return new Promise((resolve, reject) => {
//     const instance = axios.create({
//       baseURL: "http://123.207.32.32:8000",
//       timeout: 5000,
//     });
//     instance(config)
//       .then((res) => {
//         resolve(res);
//       })
//       .catch((err) => {
//         reject(err);
//       });
//   });
// }

//   //创建axios实例
//   const instance = axios.create({
//     baseURL: "http://123.207.32.32:8000",
//     timeout: 5000,
//   });
//   instance(config)
//     .then((res) => {
//       //   console.log(res);
//       success(res);
//     })
//     .catch((err) => {
//       //   console.log(err);
//       failure(err);
//     });
// }
