<template>
  <el-card>
    <el-row :gutter="20" class="header">
      <el-col :span="7">
        <el-input
          :placeholder="$t('table.placeholder')"
          clearable
          v-model="queryForm.query"
        >
        </el-input>
      </el-col>
      <el-button type="primary" :icon="Search" @click="initGetUserList">{{
        $t('table.search')
      }}</el-button>
      <el-button type="primary" @click="handleDialogValue()">{{
        $t('table.adduser')
      }}</el-button>
    </el-row>

    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column
        :prop="item.prop"
        :label="$t(`table.${item.label}`)"
        :key="index"
        v-for="(item, index) in options"
        :width="item.width"
      >
        <template v-slot="{ row }" v-if="item.prop === 'mg_state'">
          <el-switch v-model="row.mg_state" @change="toggleMgState(row)" />
        </template>
        <template v-slot="{ row }" v-else-if="item.prop === 'create_time'">
          {{ $filters.filterDate(row.create_time) }}
        </template>
        <template #default="{ row }" v-else-if="item.prop === 'action'">
          <el-button
            type="primary"
            size="small"
            :icon="Edit"
            @click="handleDialogValue(row)"
          ></el-button>
          <el-button type="warning" size="small" :icon="Setting"></el-button>
          <el-button
            type="danger"
            size="small"
            :icon="Delete"
            @click="deleteUser(row)"
          ></el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      v-model:current-page="queryForm.pagenum"
      v-model:page-size="queryForm.pagesize"
      :page-sizes="[2, 5, 10, 15]"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </el-card>
  <Dialog
    v-model="dialogVisible"
    :dialogTitle="dialogTitle"
    :dialogTableValue="dialogTableValue"
    v-if="dialogVisible"
    @initUserList="initGetUserList"
  />
</template>

<script setup>
import { ref } from 'vue'
import { Search, Edit, Setting, Delete } from '@element-plus/icons-vue'
import { getUser, changeUserState, delUser } from '@/api/users.js'
import { options } from './options.js'
import { ElMessage, ElMessageBox } from 'element-plus'
import { useI18n } from 'vue-i18n'
import Dialog from './components/DialogComponent.vue'
import { isNull } from '@/utils/filters'
const i18n = useI18n()

const queryForm = ref({
  query: '',
  pagenum: 1,
  pagesize: 10
})

const total = ref(0)
const tableData = ref([])
const dialogVisible = ref(false)
const dialogTitle = ref('')
const dialogTableValue = ref([])

const initGetUserList = async () => {
  const res = await getUser(queryForm.value)
  tableData.value = res.users
  total.value = res.total
}

initGetUserList()

const handleSizeChange = (pageSize) => {
  queryForm.value.pagesize = pageSize
  queryForm.value.pagenum = 1
  initGetUserList()
}

const handleCurrentChange = (pageNum) => {
  queryForm.value.pagenum = pageNum
  initGetUserList()
}

const toggleMgState = (user) => {
  changeUserState(user.id, user.mg_state)
  ElMessage({
    message: i18n.t('message.updateSuccess'),
    type: 'success'
  })
}

const handleDialogValue = (row) => {
  if (isNull(row)) {
    dialogTitle.value = '添加用户'
    dialogTableValue.value = {}
  } else {
    dialogTitle.value = '编辑用户'
    dialogTableValue.value = JSON.parse(JSON.stringify(row))
  }
  dialogVisible.value = true
}

const deleteUser = (row) => {
  ElMessageBox.confirm(i18n.t('dialog.deleteTitle'), 'Warning', {
    confirmButtonText: 'OK',
    cancelButtonText: 'Cancel',
    type: 'warning'
  })
    .then(() => {
      delUser(row.id)
      ElMessage({
        type: 'success',
        message: 'Delete completed'
      })
      initGetUserList()
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: 'Delete canceled'
      })
    })
}
</script>

<style lang="scss" scoped>
.header {
  padding-bottom: 16px;
  box-sizing: border-box;
}

:deep(.el-pagination) {
  padding-top: 16px;
  box-sizing: border-box;
}
</style>
