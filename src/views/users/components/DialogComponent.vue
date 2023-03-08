<template>
  <el-dialog
    :model-value="modelValue"
    :title="dialogTitle"
    width="30%"
    @close="handleClose"
  >
    <el-form :rules="rules" ref="formRef" :model="form" label-width="70px">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="form.username" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password" type="password" />
      </el-form-item>
      <el-form-item label="Email" prop="email">
        <el-input v-model="form.email" />
      </el-form-item>
      <el-form-item label="手机" prop="mobile">
        <el-input v-model="form.mobile" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="handleClose">取消</el-button>
        <el-button type="primary" @click="handleConfirm">确认</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import { defineEmits, defineProps, ref } from 'vue'
import { addUser } from '@/api/users.js'
import { ElMessage } from 'element-plus'
import i18n from '@/i18n/index.js'

defineProps({
  dialogTitle: {
    type: String,
    default: '',
    required: true
  },
  modelValue: {
    type: Boolean,
    default: false,
    required: true
  }
})
const emits = defineEmits(['update:modelValue'])

//v-model实现父子组件通信
const handleClose = () => {
  emits('update:modelValue', false)
}

const handleConfirm = async () => {
  await addUser(form.value)
  handleClose()
  ElMessage({
    message: i18n.global.t('message.updateSuccess'),
    type: 'success'
  })
}

const formRef = ref(null)
const form = ref({
  username: '',
  password: '',
  email: '',
  mobile: ''
})

const rules = ref({
  username: [
    { required: true, message: 'Please input username', trigger: 'blur' }
  ],
  password: [
    { required: true, message: 'Please input password', trigger: 'blur' }
  ],
  email: [
    {
      required: true,
      message: 'Please input email',
      trigger: 'blur',
      type: 'email'
    }
  ],
  mobile: [
    { required: true, message: 'Please input mobile', trigger: 'blur' },
    {
      pattern: /^1[3-9]\d{9}$/,
      message: 'Please input correct mobile'
    }
  ]
})
</script>
