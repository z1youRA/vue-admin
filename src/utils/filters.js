import dayjs from 'dayjs' // ES 2015

export const isNull = (date) => {
  if (!date) return true
  else if (JSON.stringify(date) === '[]') return true
  else if (JSON.stringify(date) === '{}') return true
  else return false
}

const filterDate = (date, format = 'YYYY-MM-DD') => {
  if (!isNull(date)) {
    date = parseInt(date) * 1000
    return dayjs(date).format(format)
  } else {
    return '--'
  }
}

//注册为全局属性, 在main.js中传入app参数
export default (app) => {
  app.config.globalProperties.$filters = {
    filterDate
  }
}
