<template>
    <div class="editCourseDetail">
        <div class="main-content">
            <div class="content-board">
                <fieldset class="content-box">
                    <legend><h3>&nbsp;基础信息&nbsp;</h3></legend>
                    <div class="content-body">
                        <div class="img-board">
                            <el-upload
                                    class="avatar-uploader"
                                    action="https://jsonplaceholder.typicode.com/posts/"
                                    :show-file-list="false"
                                    :on-success="handleAvatarSuccess"
                                    :before-upload="beforeAvatarUpload">
                                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                                <i v-else class="el-icon-plus avatar-uploader-icon"></i>

                            </el-upload>
                        </div>

                        <el-form ref="form" :model="form" label-width="80px">
                            <el-form-item label="课程标题">
                                课程标题
                            </el-form-item>
                            <el-form-item label="课程类型">
                                社会科学 -- 研究方法 -- A类
                            </el-form-item>

                            <el-form-item class="student-list-group" label="学生群体">
                                <el-select class="select-student-group" v-model="value" placeholder="请选择学历层">
                                    <el-option v-for="education in educationList" :key="education.value" :label="education.label" :value="education.value"></el-option>
                                </el-select>
                                <el-input class="add-student-group" v-model="input" placeholder="输入类型"></el-input>
                                <el-button class="add-button" id="add-student-btn" icon="el-icon-plus" circle @click="addStudentType"></el-button>
                            </el-form-item>

                            <el-form-item label="所需工具">
                                <el-select class="select-tool" v-model="form.region" placeholder="请选择">
                                    <el-option label="WebStorm" value="WebStorm"></el-option>
                                    <el-option label="Oracle" value="Oracle"></el-option>
                                </el-select>
                                <el-button class="add-button" icon="el-icon-plus" circle></el-button>
                            </el-form-item>
                            <el-form-item label="课程标签">
                                <el-tag
                                        :key="tag"
                                        v-for="tag in dynamicTags"
                                        closable
                                        :disable-transitions="false"
                                        @close="handleClose(tag)">
                                    {{tag}}
                                </el-tag>
                                <el-input
                                        class="input-new-tag"
                                        v-if="inputVisible"
                                        v-model="inputValue"
                                        ref="saveTagInput"
                                        size="small"
                                        @keyup.enter.native="handleInputConfirm"
                                        @blur="handleInputConfirm"
                                >
                                </el-input>
                                <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
                            </el-form-item>
                            <el-form-item label="教学目标">
                                <el-input v-model="form.name"></el-input>
                            </el-form-item>
                            <el-form-item label="课程描述">
                                <el-input
                                    type="textarea"
                                    :autosize="{ minRows: 4, maxRows: 8}"
                                    placeholder="请输入内容"
                                    v-model="textarea3">
                                </el-input>
                            </el-form-item>
                        </el-form>
                    </div>
                </fieldset>
            </div>

            <div class="content-board">
                <fieldset class="content-box">
                    <legend><h3>&nbsp;课程介绍&nbsp;</h3></legend>
                    <div class="content-body">
                        <el-input
                                type="textarea"
                                :autosize="{ minRows: 4, maxRows: 8}"
                                placeholder="请输入内容"
                                v-model="textarea3">
                        </el-input>
                    </div>
                </fieldset>
            </div>

            <div class="content-board">
                <fieldset class="content-box">
                    <legend><h3>&nbsp;下载路径&nbsp;</h3></legend>
                    <div class="content-body">

                        <div class="path-board">
                            <el-row>
                                <el-col :span="12">
                                    <el-form ref="form" :model="form" label-width="80px" style="padding-bottom: 5px;">
                                        <el-form-item label="类型名称" style="margin-bottom: 10px;">
                                            <el-select v-model="form.region" placeholder="请选择">
                                                <el-option label="百度云盘" value="百度云盘"></el-option>
                                                <el-option label="金山网盘" value="金山网盘"></el-option>
                                            </el-select>
                                        </el-form-item>
                                        <el-form-item label="URL地址" style="margin-bottom: 5px;">
                                            <el-input v-model="form.name"></el-input>
                                        </el-form-item>
                                    </el-form>
                                </el-col>
                                <el-col :span="12">
                                    <el-form ref="form" :model="form" label-width="80px">
                                        <el-form-item label="下载备注">
                                            <el-input
                                                    type="textarea"
                                                    :autosize="{ minRows: 4, maxRows: 8}"
                                                    placeholder="请输入内容"
                                                    v-model="textarea3" style="width: 100%;">
                                            </el-input>
                                        </el-form-item>
                                    </el-form>
                                </el-col>
                            </el-row>
                        </div>

                        <div class="path-board">
                            <el-row>
                                <el-col :span="12">
                                    <el-form ref="form" :model="form" label-width="80px" style="padding-bottom: 5px;">
                                        <el-form-item label="类型名称" style="margin-bottom: 10px;">
                                            <el-select v-model="form.region" placeholder="请选择">
                                                <el-option label="百度云盘" value="百度云盘"></el-option>
                                                <el-option label="金山网盘" value="金山网盘"></el-option>
                                            </el-select>
                                        </el-form-item>
                                        <el-form-item label="URL地址" style="margin-bottom: 5px;">
                                            <el-input v-model="form.name"></el-input>
                                        </el-form-item>
                                    </el-form>
                                </el-col>
                                <el-col :span="12">
                                    <el-form ref="form" :model="form" label-width="80px">
                                        <el-form-item label="下载备注">
                                            <el-input
                                                    type="textarea"
                                                    :autosize="{ minRows: 4, maxRows: 8}"
                                                    placeholder="请输入内容"
                                                    v-model="textarea3" style="width: 100%;">
                                            </el-input>
                                        </el-form-item>
                                    </el-form>
                                </el-col>
                            </el-row>
                        </div>

                        <!--<div class="path-board">-->
                            <!--<span class="path-board-col">-->
                                <!--<el-form ref="form" :model="form" label-width="80px">-->
                                    <!--<el-form-item label="类型名称" class="cscs">-->
                                        <!--<el-select v-model="form.region" placeholder="请选择">-->
                                            <!--<el-option label="百度云盘" value="百度云盘"></el-option>-->
                                            <!--<el-option label="金山网盘" value="金山网盘"></el-option>-->
                                        <!--</el-select>-->
                                    <!--</el-form-item>-->
                                    <!--<el-form-item label="URL地址">-->
                                        <!--<el-input v-model="form.name"></el-input>-->
                                    <!--</el-form-item>-->
                                <!--</el-form>-->
                            <!--</span>-->
                            <!--<span class="path-board-col" style="border-left: 1px dashed #d9d9d9;">-->
                                <!--<el-form ref="form" :model="form" label-width="80px">-->
                                    <!--<el-form-item label="课程描述" class="cscs">-->
                                        <!--<el-input-->
                                                <!--type="textarea"-->
                                                <!--:autosize="{ minRows: 4, maxRows: 8}"-->
                                                <!--placeholder="请输入内容"-->
                                                <!--v-model="textarea3">-->
                                        <!--</el-input>-->
                                    <!--</el-form-item>-->
                                <!--</el-form>-->
                            <!--</span>-->
                        <!--</div>-->

                        <div class="path-board path-board-btn">
                            <i class="el-icon-plus"></i>
                        </div>

                    </div>
                </fieldset>
            </div>

            <div class="content-board">
                <fieldset class="content-box">
                    <legend><h3>&nbsp;其他&nbsp;</h3></legend>
                    （以下信息有助于我们为您提供更好的服务）
                    <div class="content-body">
                        <el-form ref="form" :model="form" label-width="120px">
                            <el-form-item label="您的创作周期">
                                <el-radio-group v-model="form.resource">
                                    <el-radio label="0~2小时/周"></el-radio>
                                    <el-radio label="2~4小时/周"></el-radio>
                                    <el-radio label=">5小时/周"></el-radio>
                                    <el-radio label="不确定"></el-radio>
                                </el-radio-group>
                            </el-form-item>
                            <el-form-item label="教学经验年限">
                                <el-radio-group v-model="form.resource">
                                    <el-radio label="无经验"></el-radio>
                                    <el-radio label="1年以内"></el-radio>
                                    <el-radio label="3年以内"></el-radio>
                                    <el-radio label="3年以上"></el-radio>
                                </el-radio-group>
                            </el-form-item>
                            <el-form-item label="教学特征">
                                <el-radio-group v-model="form.resource">
                                    <el-radio label="轻松"></el-radio>
                                    <el-radio label="一般"></el-radio>
                                    <el-radio label="专业"></el-radio>
                                    <el-radio label="严肃"></el-radio>
                                </el-radio-group>
                            </el-form-item>
                            <el-form-item label="兴趣爱好">
                                <el-checkbox-group v-model="form.type">
                                    <el-checkbox label="看书" name="type"></el-checkbox>
                                    <el-checkbox label="上网" name="type"></el-checkbox>
                                    <el-checkbox label="运动" name="type"></el-checkbox>
                                    <el-checkbox label="绘画" name="type"></el-checkbox>
                                    <el-checkbox label="手工" name="type"></el-checkbox>
                                </el-checkbox-group>
                            </el-form-item>
                            <el-form-item label="用户反馈">
                                <el-input type="textarea" v-model="form.desc"></el-input>
                            </el-form-item>
                            <el-form-item>
                                <el-button>重置</el-button>
                                <el-button type="primary" @click="onSubmit">保存</el-button>
                            </el-form-item>
                        </el-form>
                    </div>
                </fieldset>
            </div>

        </div>
        <div class="right-navigation" width="200px">
            <div style="height: 300px;">
                <el-steps direction="vertical" :active="1">
                    <el-step title="基础信息"></el-step>
                    <el-step title="课程介绍"></el-step>
                    <el-step title="下载路径"></el-step>
                    <el-step title="其他"></el-step>
                </el-steps>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "EditCourseDetail",
        data() {
            return {
                imageUrl: '',
                textarea3: '',
                input: '',
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                },
                dynamicTags: ['标签一', '标签二', '标签三'],
                inputVisible: false,
                inputValue: '',
                educationList: [
                    {
                        value: '选项1',
                        label: '小学以下'
                    },{
                        value: '选项2',
                        label: '小学'
                    },{
                        value: '选项3',
                        label: '初中'
                    },{
                        value: '选项4',
                        label: '高中'
                    },{
                        value: '选项5',
                        label: '大学'
                    },{
                        value: '选项6',
                        label: '硕士'
                    },{
                        value: '选项7',
                        label: '专科'
                    },{
                        value: '选项8',
                        label: '其他'
                    }
                ],
                value: ''
            };
        },
        methods: {
            handleAvatarSuccess(res, file) {
                this.imageUrl = URL.createObjectURL(file.raw);
                this.$message.success('成功上传课程封面!');
            },
            beforeAvatarUpload(file) {
                // const isJPG = file.type === 'image/jpeg';
                // const isLt2M = file.size / 1024 / 1024 < 2;
                //
                // if (!isJPG) {
                //     this.$message.error('上传头像图片只能是 JPG 格式!');
                // }
                // if (!isLt2M) {
                //     this.$message.error('上传头像图片大小不能超过 2MB!');
                // }
                // return isJPG && isLt2M;
            },
            onSubmit() {
                console.log('submit!');
            },
            handleClose(tag) {
                this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
            },

            showInput() {
                this.inputVisible = true;
                this.$nextTick(_ => {
                    this.$refs.saveTagInput.$refs.input.focus();
                });
            },

            handleInputConfirm() {
                let inputValue = this.inputValue;
                if (inputValue) {
                    this.dynamicTags.push(inputValue);
                }
                this.inputVisible = false;
                this.inputValue = '';
            },
            addStudentType() {
                // $('#add-student-btn').before('<el-input class="add-student-group" placeholder="输入类型"></el-input>');
            }

        }
    }
</script>

<style>
    .el-tag + .el-tag {
        margin-left: 10px;
    }

</style>

<style scoped lang="scss">
    .editCourseDetail {
        /*background-color: white;*/
        min-height: 640px;
        padding-left: 12%;
        padding-bottom: 10px;
        .main-content {
            display: inline-block;
            /*border: 1px dashed #d9d9d9;*/
            width: 70%;
            height: 100%;
            .content-board {
                background-color: white;
                padding: 10px;
                margin-top: 10px;
                .path-board {
                    border: 1px dashed #d9d9d9;
                    margin-bottom: 10px;
                    padding: 20px 10px 0px 0;
                    .path-board-col {
                        display: inline-block;
                        width: 48%;
                        .path-board-col-content {
                            margin:0px;
                        }
                    }
                }
                .path-board:hover {
                    border-color: #409EFF;
                }
                .path-board-btn {
                    width: 30%;
                    height: 50px;
                    text-align: center;
                    margin:auto;
                }
            }
            .content-box {
                background-color: white;
                font-size: 14px;
                border: none;
                text-align: center;
                border-top: 1px dashed #e2e2e2;
                .content-body {
                    text-align: left;
                    .img-board {
                        border: 1px dashed #d9d9d9;
                        width: 40%;
                        margin:auto;
                        text-align: center;
                    }
                    .select-student-group {
                        width: 15%;
                    }
                    .add-student-group {
                        display: inline-block;
                        width: 15%;
                        margin-left: 10px;
                    }
                    .add-button {
                        border: none;
                    }
                    .select-tool {
                        width: 15%;
                    }
                }
            }
        }
        .right-navigation {
            padding: 10px 10px 20px 40px;
            display: inline-block;
            vertical-align: top;
            /*border: 1px dashed #d9d9d9;*/
            width: 15%;

        }
    }
    el-upload {
        /*border: 1px dashed #d9d9d9;*/
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }
    el-upload:hover {
        border-color: #409EFF;
        border: 1px dashed #d9d9d9;
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
    .button-new-tag {
        margin-left: 10px;
        height: 32px;
        line-height: 30px;
        padding-top: 0;
        padding-bottom: 0;
    }
    .input-new-tag {
        width: 90px;
        margin-left: 10px;
        vertical-align: bottom;
    }

</style>
<style>
    .cscs {
        margin-bottom: 1px;
    }
</style>