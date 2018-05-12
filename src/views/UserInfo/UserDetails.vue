<template>
    <div class="userDetails" style="margin-left:10px;">
        <el-row :gutter="20">
            <el-col :span="5">
                <div class="grid-content bg-purple">
                    <el-upload
                        class="avatar-uploader"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload">
                        <img v-if="imageUrl" :src="imageUrl" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon" style="font-size:14px;">请上传头像</i>
                    </el-upload>
                </div>
            </el-col>
            <el-col :span="19">
                <dl class="person-info">
                    <dt class="person-nick-name">
                        <span>anneCoder</span>
                    </dt>
                    <dd class="person-detail"> 
                        <span class="mini-info info-null">未填写姓名</span><span>|</span>
                        <span class="mini-info info-null">未填写邮箱</span><span>|</span>
                        <span class="mini-info info-null">未填写手机</span><span>|</span>
                        <span class="mini-info info-null">未填写学校</span><span>|</span>
                        <span class="mini-info info-null">未填写专业</span><span>|</span>
                    </dd>
                    <dd class="person-detail"> 
                        <span class="mini-info info-null">未填写学校</span><span>|</span>
                        <span class="mini-info info-null">未填写学号</span><span>|</span>
                        <span class="mini-info info-null">未填写生日</span>
                    </dd>
                </dl>
            </el-col>
        </el-row>

        <fieldset class="content-box">
            <legend><h3>&nbsp;学习兴趣&nbsp;</h3></legend>
            <div class="content-body">
                <el-tag class="min-tag">CSS</el-tag>
                <el-tag class="min-tag">Java</el-tag>
                <el-tag class="min-tag">html</el-tag>
                <el-tag class="min-tag">web</el-tag>
                <el-tag class="min-tag">大数据</el-tag>
            </div>
        </fieldset>

        <fieldset class="content-box">
            <legend><h3>&nbsp;个人描述&nbsp;</h3></legend>
            <div class="content-body">
                个人描述个人描述个人描述个人描述个人描述个人描述个人描述个人描述个人描述个人描述 
                <p>个人描述个人描述个人描述个人描述个人描述个人描述</p> 
                <p>个人描述个人描述个人描述个人描述个人描述</p> 
                <p>个人描述个人描述个人描述个人描述个人描述个人描述个人描述个人描述</p> 
            </div> 
        </fieldset>
    </div>
</template>

<style scoped lang="scss">
    .userDetails {
        padding-top: 15px;
        .avatar-uploader {
            border: 1px dashed #d9d9d9;
            border-radius: 6px;
            cursor: pointer;
            position: relative;
            overflow: hidden;
        }
        .avatar-uploader:hover {
            border-color: #409EFF;
        }
        .avatar-uploader-icon {
            font-size: 28px;
            color: #8c939d;
            width: 178px;
            height: 178px;
            line-height: 178px;
            text-align: center;
        }
        .avatar {
            width: 178px;
            height: 178px;
            display: block;
        }
        .min-tag {
            margin-right:10px;
        }
        .content-box {
            margin-right:10px;
            font-size: 14px;
            border: none;
            border-top: 1px solid #e2e2e2;
        }
        .person-nick-name {
            font-size: 20px;
        }
        .person-detail {
            margin: 10px 0px

        }
        .mini-info {
            padding: 15px;
        }
        .info-null {
            color:#F59701;
        }
    }
</style>

<script>
  export default {
    data() {
      return {
        imageUrl: ''
      };
    },
    methods: {
      handleAvatarSuccess(res, file) {
            if(file != null) {
                this.imageUrl = URL.createObjectURL(file.raw);
            }
      },
      beforeAvatarUpload(file) {
        if(file != null) {
            const isJPG = file.type === 'image/jpeg';
            const isLt2M = file.size / 1024 / 1024 < 2;
            if (!isJPG) {
            this.$message.error('上传头像图片只能是 JPG 格式!');
            }
            if (!isLt2M) {
            this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            return isLt2M;
        }
      }
    }
  }
</script>