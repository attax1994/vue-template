const serverUrl = 'http://rap2api.taobao.org/app/mock/11991';
export const ActionUrls = Object.freeze({
  course: {
    getCategoryVersion: `${serverUrl}/courses/getLeimuVersion`,
    getCategoryInfo: `${serverUrl}/courses/getLeimuInfo`,
  },
});

const storePrefix = 'daxiaoke-';
export const StoreKeys = Object.freeze({
  course: {
    categoryVersion: `${storePrefix}categoryVersion`,
    categoryItems: `${storePrefix}categoryItems`
  }
});