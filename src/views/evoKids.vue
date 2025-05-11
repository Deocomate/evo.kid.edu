<template>
    <div class="e-kids-robotics">
        <section class="section-1">
            <div class="section-1-background">
            </div>
            <div class="e-container">
                <div class="item-1"></div>
                <div class="item-2">HỌC LẬP TRÌNH</div>
                <div class="item-3">ROBOTICS</div>
                <div class="item-4"></div>
                <div class="item-5">Nuôi dưỡng những thế hệ tiên phong</div>
                <div class="item-6">Giúp con phát triển <b>Tư duy Logic</b> và <b>Trí thông minh</b> công nghệ vượt trội
                    - thông qua <b>lập trình Robot</b>.</div>
                <div class="item-7">DẪN ĐẦU PHÁT TRIỂN NĂNG LỰC CÔNG NGHỆ VIỆT NAM</div>
                <div class="item-8">ĐĂNG KÝ NGAY</div>
                <div class="item-9"></div>
            </div>
        </section>
        <section class="section-2">
            <div class="e-container">
                <div class="group group-1">
                    <div class="item item-1"></div>
                    <div class="item item-2">Thời gian học</div>
                    <div class="item item-3">12 Tháng | 45 Buổi</div>
                </div>
                <div class="group group-2">
                    <div class="item item-1"></div>
                    <div class="item item-2">Thời lượng buổi học</div>
                    <div class="item item-3">1 Buổi/Tuần | 2h/Buổi</div>
                </div>
                <div class="group group-3">
                    <div class="item item-1"></div>
                    <div class="item item-2">Độ tuổi phù hợp</div>
                    <div class="item item-3">6 - 17 Tuổi</div>
                </div>
                <div class="group group-4">
                    <div class="item item-1"></div>
                    <div class="item item-2">Số lượng học viên</div>
                    <div class="item item-3">3 - 5 Học viên</div>
                </div>
            </div>
        </section>
        <section class="section-3" ref="section3">
            <div class="section-3-bg"></div>
            <div class="e-container">
                <div class="item-1">ƯU ĐÃI</div>
                <div class="item-2">TRẢI NGHIỆM <span style="color: #cc0b14">MIỄN PHÍ</span></div>
                <div class="item-3">30</div>
                <div class="item-4">PHỤ HUYNH ĐĂNG KÝ ĐÂU TIÊN</div>
                <div class="item-5">Giá niêm yết</div>
                <div class="item-6">399.000đ</div>
                <div class="item-7">Giá ưu đãi</div>
                <div class="item-8">0đ</div>
                <div class="item-9">Chỉ còn</div>
                <div class="item-10">12</div>
                <div class="item-11">suất cho phụ huynh đăng ký nhanh nhất</div>
                <div class="item-12"></div>
                <div class="item-bg-group"></div>
                <div class="item-13">Form đăng ký chính thức</div>
                <div class="item-14">Phụ huynh vui lòng điền đẩy đủ thông tin</div>
                <div class="input-group">
                    <input v-model="formData.parentName" class="item-15" placeholder="Tên phụ huynh">
                    <input v-model="formData.phoneNumber" class="item-16" placeholder="Số điện thoại">
                    <input v-model="formData.address" class="item-17" placeholder="Địa chỉ sinh sống">
                    <input v-model="formData.studentName" class="item-18" placeholder="Tên học viên">
                    <input v-model="formData.age" class="item-19" placeholder="Độ tuổi">
                    <input v-model="formData.email" class="item-20" placeholder="Email">
                </div>
                <button @click="onSubmitForm" class="item-21" value="Hoàn tất đăng ký">Hoàn tất đăng ký</button>
                <div class="item-22"></div>
                <div class="item-23"></div>
            </div>
        </section>
        <section class="section-4">
            <div class="e-container">
                <div class="section-image"></div>
                <div class="section-group">
                    <div class="item-1">TÌM HIỂU TỔNG QUAN
                        KHOÁ HỌC ROBOTICS</div>
                    <div class="item-2">TẠI EVO</div>
                    <div class="item-3"><b style="color: #cc0b14">Robotics</b> là khoá học lắp ráp & lập trình robot, đi
                        từ cơ bản đến nâng cao, được EVO thiết kế đặc biệt dành cho các bé từ <b>6-9 tuổi.</b></div>
                    <div class="item-4">Phát triển vượt bậc <b>trí thông minh, tư duy logic</b> và <b>khả năng sáng
                            tạo</b>, giúp bé <b>giải phóng cảm xúc</b> thông qua lắp ráp và lập trình robot.</div>
                    <div class="item-5"><b>Hỗ trợ giúp con học tốt</b> được nhiều kiến thức của các môn học khác như:
                        <b>Tiếng anh, toán học, tin học và lập trình.</b>
                    </div>
                    <div class="item-6">Sử dụng bộ <b style="color: #cc0b14">VEX GO</b> từ thương hiệu <b
                            style="color: #cc0b14">VEX Robotics</b> - <b>Hiện đại bậc nhất</b> trong lĩnh vực đào tạo
                        Robotics trên thế giới.</div>
                </div>
                <div class="item-7"></div>
            </div>
        </section>
        <section class="section-5">
            <div class="e-container">
                <div class="item-1">TỔNG QUAN CHƯƠNG TRÌNH ROBOTICS</div>
                <div class="item-2">
                    <div class="sup-item-1">
                        Trang bị <b>kiến thức nền tảng Robotics </b>thông qua việc lắp ráp và lập trình Robot hoạt động,
                        qua đó học thêm nhiều kiến thức về Toán học, Vật lý/Cơ học, Điều khiển học.
                    </div>
                    <div class="sup-item-2">
                        Phù hợp nhất với các bé độ tuổi 6+
                    </div>
                    <div class="sup-item-3">
                        Xem chi tiết
                    </div>
                </div>
                <div class="item-3">
                    <div class="sup-item-1">
                        <b>Tìm hiểu</b> và <b>phân loại</b> Robot dựa theo hình dáng, công việc và môi trường hoạt động
                        thông qua việc <b>lắp ráp & lập trình</b> Robot phức tạp; <b>thực hiện nhiệm vụ</b> gắn liền với
                        thực tế, qua đó các con học thêm nhiều kiến thức về Toán học, Vật lý/Cơ học, Điều khiển học.
                    </div>
                    <div class="sup-item-2">
                        Phù hợp nhất với các bé độ tuổi 7+
                    </div>
                    <div class="sup-item-3">
                        Xem chi tiết
                    </div>
                </div>
            </div>
        </section>
        <section class="section-6">
            <div class="e-container">
                <div class="item-1">LỢI ÍCH TUYỆT VỜI CỦA ROBOTICS</div>
                <div class="item-2">Đây chính là sự khác biệt của Robotics so với các môn học bổ trợ khác</div>
                <div class="item-3"></div>
            </div>
        </section>
        <section class="section-7">
            <div class="e-container">
                <div class="item-1">LỘ TRÌNH CHI TIẾT TỪNG NĂM</div>
                <div class="item-2">Bấm vào 1 trong 2 ô dưới đây để xem thông tin chi tiết của từng năm</div>
                <div class="item-3" @click="detailInYear = 1">LỘ TRÌNH NĂM 1</div>
                <div class="item-3-a" @click="detailInYear = 2">LỘ TRÌNH NĂM 2</div>
                <div class="item-4" v-if="detailInYear == 1">
                    <div class="sub-item-1"></div>
                    <div class="verified sub-item-2">Sử dụng bộ VEX GO Robotics hiện đại nhất.</div>
                    <div class="verified sub-item-3">Khoá học nhập môn Robotics hướng tới các bé có sở thích tìm tòi,
                        khám phá tìm hiểu về bộ môn Thiết kế và Lập trình Robotics.</div>
                    <div class="verified sub-item-4">Chương trình phù hợp nhất với các bé học sinh từ 6 tuổi trở lên.
                    </div>
                    <div class="verified sub-item-5">Phát triển vượt bậc trí thông minh, tư duy logic và khả năng sáng
                        tạo, giúp bé giải phóng cảm xúc thông qua lắp ráp và lập trình robot.</div>
                    <div class="sub-item-6">“Ở mỗi Level học,
                        con sẽ được trải nghiệm <b>cuộc hành trình khám phá những vùng đất mới.</b>”
                        <b>
                            <div style="font-size: 12px; text-align: center; color: #00afef;">&lt;Chi tiết xem bên
                                dưới&gt;</div>
                        </b>
                    </div>
                    <div class="sub-item-7"></div>
                </div>
                <div class="item-4-a" v-else>
                    <div class="sub-item-1"></div>
                    <div class="verified sub-item-2">Sử dụng bộ VEX GO Robotics hiện đại nhất.</div>
                    <div class="verified sub-item-3">Khoá học nhập môn Robotics hướng tới các bé có sở thích tìm tòi,
                        khám phá tìm hiểu về bộ môn Thiết kế và Lập trình Robotics.</div>
                    <div class="verified sub-item-4">Chương trình phù hợp nhất với các bé học sinh từ 6 tuổi trở lên.
                    </div>
                    <div class="verified sub-item-5">Phát triển vượt bậc trí thông minh, tư duy logic và khả năng sáng
                        tạo, giúp bé giải phóng cảm xúc thông qua lắp ráp và lập trình robot.</div>
                    <div class="sub-item-6">“Ở mỗi Level học,
                        con sẽ được trải nghiệm <b>cuộc hành trình khám phá những vùng đất mới.</b>”
                        <b>
                            <div style="font-size: 12px; text-align: center; color: #00afef;">&lt;Chi tiết xem bên
                                dưới&gt;</div>
                        </b>
                    </div>
                    <div class="sub-item-7"></div>
                </div>
                <div class="item-6" v-if="detailInYear == 1">
                    <div class="sub-item-1"></div>
                    <div class="sub-item-2"></div>
                    <div class="sub-item-3"></div>
                </div>
                <div class="item-6-a" v-else>
                    <div class="sub-item-1"></div>
                    <div class="sub-item-2"></div>
                    <div class="sub-item-3"></div>
                </div>
            </div>
        </section>
        <section class="section-8">
            <div class="e-container">
                <div class="item-1">CƠ HỘI THAM GIA CÁC GIẢI ĐẤU
                    ROBOTICS DO EVO TỔ CHỨC</div>
                <div class="item-2">CƠ HỘI THAM GIA CÁC GIẢI ĐẤU
                    ROBOTICS DO EVO TỔ CHỨC
                    Kết thúc mỗi khoá học, các con sẽ có cơ hội tham gia thi đấu các giải vô địch Robotics do EVO đăng
                    cai tổ chức.
                    <br>
                    <br>
                    Đây sẽ là dịp vô cùng hiếm hoi để các con thể hiện tài năng, vận dụng tất cả những kiến thức và kỹ
                    năng đã học được trong suốt 1 lộ trình để tranh tài cùng các bạn khác.
                </div>
                <div class="item-3">Duy nhất chỉ có tại EVO</div>
                <div class="item-4"></div>
            </div>
        </section>
        <section class="section-9">
            <div class="e-container">
                <div class="item-1">VIDEO LỚP HỌC ROBOTICS TẠI EVO</div>
                <div class="item-2">Tìm hiểu tổng quan về khoá học Robotics dành cho trẻ từ 6-9 tuổi, tại Trường học
                    Công nghệ EVO</div>
                <div class="item-3"></div>
                <div class="item-bg"></div>
            </div>
        </section>
        <section class="section-10">
            <div class="e-container">
                <div class="item-1">ƯU ĐÃI HỌC PHÍ ĐẶC BIỆT</div>
                <div class="item-2">Bé vui học thả ga, ba mẹ không lo về giá! </div>
                <div class="item-3">

                </div>
                <div class="item-4">

                </div>
            </div>
        </section>
        <section class="section-11">
            <div class="e-container">
                <div class="item-1">CẢM NHẬN CỦA PHỤ HUYNH</div>
                <div class="item-2">Những chia sẻ thực tế của Phụ huynh đang có con học Robotics tại EVO</div>
                <div class="item-3"></div>
                <div class="item-4"></div>
            </div>
        </section>
        <section class="section-12">
            <div class="e-container">
                <div class="item-1">VÌ SAO EVO LÀ TRƯỜNG HỌC ĐÀO TẠO
                </div>
                <div class="item-2">ROBOTICS TỐT NHẤT HIỆN NAY</div>
                <div class="item-3"></div>
                <div class="item-4">TRƯỜNG HỌC CÔNG NGHỆ CÓ QUY MÔ
                    LỚN </div>
                <div class="item-5">EVO với hơn 30+ cơ sở tại Hà Nội, Tp.Hồ Chí Minh và các tỉnh thành trên cả nước, đào
                    tạo hơn 40.000 học viên, giúp họ thành công trong lĩnh vực công nghệ tại môi trường quốc tế, EVO tự
                    tin sẽ mang lại chất lượng đào tạo và kết quả học tập tốt nhất đến với học viên.</div>
                <div class="item-6"></div>
                <div class="item-7">PHÁT TRIỂN KỸ NĂNG MỀM</div>
                <div class="item-8">Ngoài việc được đào tạo chuyên sâu về lập trình, trẻ sẽ được phát triển mạnh tư duy
                    logic vượt trội, đồng thời rèn luyện tính kỷ luật và tinh thần tự giác, đề cao trách nhiệm của bản
                    thân. Những kỹ năng tối quan trọng trong thời đại 4.0 cũng sẽ được đưa vào chương trình giảng dạy,
                    đảm bảo hành trang cho trẻ tiến đến tương lai.</div>
                <div class="item-9"></div>
                <div class="item-10">CƠ HỘI THỰC TẬP SỚM - THÀNH CÔNG SỚM</div>
                <div class="item-11">EVO là đối tác liên kết chiến lược của rất nhiều các Doanh nghiệp lớn, nhỏ trong
                    nước và quốc tế. Do đó, tất cả học viên tại EVO đều có cơ hội tham gia thực tập và làm việc thực tế,
                    ngay cả khi khoá học chưa kết thúc.</div>
            </div>
        </section>
        <div @click="() => { $refs.section3.scrollIntoView({ behavior: 'smooth', block: 'center' }) }"
            class="submit-now-btn">ĐĂNG KÝ NGAY</div>
        <div class="loader" v-if="isLoading" v-loading="isLoading">

        </div>
    </div>
</template>
<script>
import { ElNotification } from 'element-plus'
export default {
    name: 'evoKids',
    created() {
        this.formData = {
            parentName: '',
            phoneNumber: '',
            address: '',
            studentName: '',
            age: '',
            email: '',
        }
        document.title = 'KHÓA HỌC ROBOTICS LẬP TRÌNH VÀ LẮP RÁP ROBOT';
    },
    mounted() {
        const me = this;
        window.addEventListener('keydown', me.onKeydown);
        window.addEventListener('contextmenu', function (event) {
            if (!me.checkAllowDevtools()) {
                ElNotification({
                    title: 'Warning',
                    message: 'Devtools not allow ',
                    type: 'warning',
                })
                event.preventDefault();
            }
        });
    },
    methods: {
        checkAllowDevtools() {
            return true;
        },

        onKeydown() {
            console.log(event);
            if (event.key === 'F12') {
                event.preventDefault();
                ElNotification({
                    title: 'Warning',
                    message: 'Devtools not allow ',
                    type: 'warning',
                })
            }
            if (event.ctrlKey && event.shiftKey && event.key === 'I') {
                event.preventDefault();
                ElNotification({
                    title: 'Warning',
                    message: 'Devtools not allow ',
                    type: 'warning',
                })
            }
            if (event.ctrlKey && event.shiftKey && event.key === 'C') {
                event.preventDefault();
                ElNotification({
                    title: 'Warning',
                    message: 'Devtools not allow ',
                    type: 'warning',
                })
            }
            if (event.ctrlKey && event.shiftKey && event.key === 'J') {
                event.preventDefault();
                ElNotification({
                    title: 'Warning',
                    message: 'Devtools not allow ',
                    type: 'warning',
                })
            }
            if (event.ctrlKey && event.key === 'U') {
                event.preventDefault();
                ElNotification({
                    title: 'Warning',
                    message: 'Devtools not allow ',
                    type: 'warning',
                })
            }
        },

        validateVietnamesePhoneNumber(phoneNumber) {
            const regex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
            return regex.test(phoneNumber);
        },

        validate() {
            const me = this;
            let msg = '';
            if (!me.formData) {
                msg = 'Có lỗi xảy ra!';
                ElNotification({
                    title: 'Error',
                    message: msg,
                    type: 'success',
                })
                return false;
            } else {
                if (!me.formData.parentName) {
                    ElNotification({
                        title: 'Error',
                        message: 'Phụ huynh vui lòng nhập tên',
                        type: 'error',
                    })
                    return false;
                }
                if (!me.formData.phoneNumber) {
                    ElNotification({
                        title: 'Error',
                        message: 'Phụ huynh vui lòng nhập số điện thoại',
                        type: 'error',
                    })
                    return false;
                }
                if (!me.validateVietnamesePhoneNumber(me.formData.phoneNumber)) {
                    ElNotification({
                        title: 'Error',
                        message: 'Số điện thoại đã nhập không hợp lệ',
                        type: 'error',
                    })
                    return false;
                }
            }
            return true;
        },

        async onSubmitForm() {
            const me = this;
            if (me.validate()) {
                me.isLoading = true;
                let res = await me.appendData(me.formData);
                me.isLoading = false;
                if (res) {
                    ElNotification({
                        title: 'Thành công',
                        message: 'Thông tin đăng ký đã được gửi đi thành công',
                        type: 'success',
                    })
                }
            }
        },

        async appendData(data) {
            const endpoint = 'https://script.google.com/macros/s/AKfycbwjkgyNCM22StD8sUM2d55FT7kqTn1ZrXyN8cMJHhDqSIZfSLh4cOdSlTGf-uarH9KT/exec';
            let fullRequest = endpoint + `?fullname=${data.parentName + '- PH Hoc vien: ' + data.studentName}&phone_number=${data.phoneNumber}&address=${data.address}&subject=&age=${data.age}&submited_at=${new Date()}&email=${data.email}`;
            let res = await fetch(fullRequest),
                json = await res.json();
            return json;
        }
    },
    data() {
        return {
            detailInYear: 1,
            formData: null,
            isLoading: false
        }
    }

}
</script>
<style scoped lang="scss">
.e-kids-robotics {
    width: 100%;
    position: relative;
}

.e-container {
    max-width: 1200px;
    margin: 0 auto;
    height: 100%;
    position: relative;
    z-index: 2;
    overflow: hidden;
}

.loader {
    height: 100vh;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
}

.submit-now-btn {
    padding: 10px 30px;
    position: fixed;
    bottom: 10px;
    left: calc(50% - 60px);
    background-color: #00afef;
    color: #fff;
    font-family: UTMCooper;
    border-radius: 20px;
    z-index: 9;
    cursor: pointer;
    animation: regisButton 2s infinite;
    transition: 1s;
    animation-fill-mode: forwards;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

@keyframes regisButton {
    0% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.1);
    }

    100% {
        transform: scale(1);
    }
}

.section-1 {
    height: 550px;
    position: relative;

    .item-1 {
        background-image: url('../assets/Kids-image/29.png');
        height: 100px;
        width: 100px;
        background-size: contain;
        transform: scaleX(-1) rotate(-10deg);
        position: absolute;
        top: 30px;
        z-index: 2;
    }

    .item-2 {
        font-size: 42px;
        font-family: UTMCooperItalic;
        color: #fff;
        position: absolute;
        top: 50px;
        left: 90px;
    }

    .item-3 {
        font-size: 122px;
        font-family: UTMCooperItalic;
        color: #fff;
        position: absolute;
        top: 70px;
        left: 20px;
    }

    .item-4 {
        height: 40px;
        width: 8px;
        background-color: rgb(255, 228, 119);
        position: absolute;
        top: 240px;
        left: 20px;
        border-radius: 2px;
    }

    .item-5 {
        color: rgb(255, 228, 119);
        position: absolute;
        top: 245px;
        left: 45px;
        font-size: 20px;
        font-family: UTMBase;
    }

    .item-6 {
        color: #fff;
        position: absolute;
        top: 300px;
        left: 20px;
        font-size: 20px;
        font-family: UTMBase;
        max-width: 550px;
    }

    .item-7 {
        color: #fff;
        position: absolute;
        top: 420px;
        left: 50px;
        font-size: 20px;
        font-family: UTMBase;
    }

    .item-8 {
        color: #fff;
        position: absolute;
        top: 475px;
        left: 270px;
        font-size: 18px;
        font-weight: 700;
        font-family: UTMBase;
        border: solid #00afef 1px;
        padding: 8px 10px;
        border-radius: 4px;
        background-color: #fff;
        color: #00afef;
        transition-duration: .5s;
        cursor: pointer;
    }

    .item-8:hover {
        transform: scale(1.05)
    }

    .item-9 {
        background-image: url('../assets/Kids-image/Khung ảnh (5).png');
        height: 500px;
        width: 500px;
        background-size: cover;
        position: absolute;
        bottom: 0;
        right: 30px;
    }
}

.section-1-background {
    height: 100%;
    width: 100%;
    background-image: url('../assets/Kids-image/48.png');
    background-size: cover;
    position: absolute;
}

.section-2 {
    .e-container {
        height: 130px;
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .group {
        height: 100%;
        width: 290px;
        position: relative;

        .item-1 {
            height: 60px;
            width: 60px;
            margin: 30px 10px;
            background-size: contain;
        }

        .item-2 {
            position: absolute;
            top: 28px;
            left: 80px;
            font-weight: 700;
            color: #00afef;
            font-size: 18px;
            font-family: UTMBase;
        }

        .item-3 {
            position: absolute;
            top: 58px;
            left: 80px;
            font-size: 18px;
            font-family: UTMBase;
        }
    }

    .group-1 {
        .item-1 {
            background-image: url('../assets/Kids-image/32.png');
        }
    }

    .group-2 {
        .item-1 {
            background-image: url('../assets/Kids-image/33.png');
        }
    }

    .group-3 {
        .item-1 {
            background-image: url('../assets/Kids-image/34.png');
        }
    }

    .group-4 {
        .item-1 {
            background-image: url('../assets/Kids-image/35.png');
        }
    }
}

.section-3 {
    height: 620px;
    position: relative;

    .section-3-bg {
        height: 100%;
        width: 100%;
        background-image: url('../assets/Kids-image/Khung ảnh (7).png');
        background-size: cover;
        background-position: 50% 0%;
        background-repeat: no-repeat;
        background-attachment: fixed;
        opacity: .6;
        top: 0;
        position: absolute;
    }

    .e-container {
        .item-1 {
            font-size: 30px;
            font-family: UTMCooper;
            color: #fff;
            position: absolute;
            top: 10px;
            left: 200px;
        }

        .item-2 {
            font-size: 30px;
            font-family: UTMCooper;
            color: #fff;
            position: absolute;
            top: 80px;
            left: 60px;
        }

        .item-3 {
            font-size: 30px;
            font-family: UTMCookies;
            color: #fff;
            position: absolute;
            top: 160px;
            left: 210px;
            background-color: #cc0b14;
            padding: 5px 30px 10px 30px;
            border-radius: 20px;
            border: solid 1px #fff;
        }

        .item-4 {
            font-size: 30px;
            font-family: UTMCooper;
            color: #fff;
            position: absolute;
            top: 260px;
            left: 0px;
        }

        .item-5 {
            font-size: 22px;
            font-family: UTMBase;
            position: absolute;
            top: 360px;
            left: 5px;
            color: #cc0b14;
            border: solid #cc0b14 1px;
            border-radius: 20px 0 0 20px;
            height: 100px;
            width: 250px;
            text-align: center;
            background-color: #fff;
        }

        .item-6 {
            font-size: 25px;
            font-family: UTMBase;
            position: absolute;
            top: 400px;
            left: 70px;
            font-weight: 700;
            color: #cc0b14;
            text-align: center;
        }

        .item-6::after {
            content: '';
            height: 2px;
            width: 100%;
            display: block;
            position: absolute;
            bottom: 14px;
            background-color: #cc0b14;
        }

        .item-7 {
            font-size: 22px;
            font-family: UTMBase;
            position: absolute;
            top: 360px;
            left: 255px;
            color: #fff;
            border: solid #fff 1px;
            border-radius: 0 20px 20px 0;
            height: 100px;
            width: 250px;
            text-align: center;
            background-color: #cc0b14;
        }

        .item-8 {
            font-size: 25px;
            font-family: UTMBase;
            position: absolute;
            top: 400px;
            left: 370px;
            font-weight: 700;
            color: #fff;
            text-align: center;
        }

        .item-9 {
            font-size: 20px;
            font-family: UTMBase;
            position: absolute;
            top: 520px;
            left: 0px;
            font-weight: 700;
            color: #fff;
            text-align: center;
        }

        .item-10 {
            font-size: 20px;
            font-family: UTMBase;
            position: absolute;
            top: 516px;
            left: 85px;
            font-weight: 700;
            color: #cc0b14;
            text-align: center;
            background-color: #fff;
            padding: 4px 8px 6px 8px;
            border-radius: 4px;
            border: solid #353333 1px;
        }

        .item-11 {
            font-size: 20px;
            font-family: UTMBase;
            position: absolute;
            top: 520px;
            left: 140px;
            font-weight: 700;
            color: #fff;
            text-align: center;
        }

        .item-12 {
            position: absolute;
            top: 90px;
            left: 670px;
            height: 24px;
            width: 24px;
            background-color: lightgreen;
            background-image: url('../assets/Kids-image/38.png');
            background-size: contain;
            border-radius: 50%;
            z-index: 4;
        }

        .item-13 {
            position: absolute;
            top: 80px;
            left: 710px;
            font-weight: 700;
            font-size: 26px;
            font-family: UTMBase;
            color: #cc0b14;
            z-index: 3;
        }

        .item-14 {
            position: absolute;
            top: 120px;
            left: 660px;
            color: #111;
            font-size: 20px;
            font-family: UTMBase;
            z-index: 3;
        }

        .item-bg-group {
            height: 500px;
            width: 500px;
            background-color: #fff;
            left: 600px;
            top: 50px;
            position: absolute;
            border-radius: 20px;
            z-index: 2;
            background-image: url('../assets/Kids-image/31.png');
        }

        .input-group {
            left: 600px;
            top: 180px;
            position: absolute;
            display: flex;
            flex-direction: column;
            row-gap: 10px;
            padding: 0 50px;
            width: 375px;

            input {
                padding: 10px;
                width: 100%;
                border-radius: 12px;
                border: solid #111 1px;
                outline: unset;
                z-index: 3;
            }
        }

        .item-21 {
            position: absolute;
            top: 480px;
            left: 740px;
            color: #111;
            font-size: 20px;
            font-family: UTMBase;
            padding: 10px 30px;
            border-radius: 30px;
            border: unset;
            color: #fff;
            background-color: #cc0b14;
            outline: unset;
            z-index: 3;

            &:hover {
                cursor: pointer;
                background-color: #dd0b16;
            }
        }

        .item-22 {
            position: absolute;
            background-image: url('../assets/Kids-image/36.png');
            height: 140px;
            width: 140px;
            top: 30px;
            background-size: contain;
            right: 10px;
            z-index: 1;
            transform: rotate(20deg);
        }

        .item-23 {
            position: absolute;
            background-image: url('../assets/Kids-image/37.png');
            height: 140px;
            width: 140px;
            top: 430px;
            background-size: contain;
            right: 530px;
            z-index: 3;
            transform: rotate(-20deg);
        }
    }
}

.section-4 {
    height: 680px;
    padding: 50px 0;
    background-image: url('../assets/Kids-image/Khung\ ảnh\ \(6\).png');
    background-attachment: fixed;
    background-position: 20% 0;

    .section-image {
        background-image: url('../assets/Kids-image/70.png');
        height: 670px;
        width: 530px;
        background-size: contain;
    }

    .section-group {
        position: absolute;
        height: 670px;
        width: 580px;
        padding: 0 20px;
        top: 0;
        right: 10px;

        .item-1 {
            position: absolute;
            font-size: 32px;
            color: #00afef;
            max-width: 400px;
            font-family: UTMCooper;
        }

        .item-1::before {
            content: '';
            display: block;
            position: absolute;
            height: 72px;
            top: 14px;
            left: -17px;
            width: 8px;
            background-color: #00afef;
        }

        .item-2 {
            position: absolute;
            font-size: 32px;
            background-color: #00afef;
            color: #fff;
            top: 100px;
            left: 0;
            padding: 0 20px;
            border-radius: 2px;
            max-width: 400px;
            font-family: UTMCooper;
        }

        .item-3 {
            position: absolute;
            font-size: 22px;
            color: #fff;
            top: 160px;
            border-radius: 2px;
            color: #111;
            font-family: UTMBase;
        }

        .item-4 {
            position: absolute;
            font-size: 22px;
            color: #fff;
            top: 260px;
            left: 60px;
            border-radius: 2px;
            color: #111;
            font-family: UTMBase;

            &::before {
                height: 24px;
                width: 24px;
                background-color: lightgreen;
                background-size: contain;
                background-image: url('../assets/Kids-image/38.png');
                border-radius: 50%;
                content: '';
                display: block;
                position: absolute;
                left: -40px;
                top: 6px;
            }
        }

        .item-5 {
            position: absolute;
            font-size: 22px;
            color: #fff;
            top: 360px;
            left: 60px;
            border-radius: 2px;
            color: #111;
            font-family: UTMBase;

            &::before {
                height: 24px;
                width: 24px;
                background-color: lightgreen;
                background-image: url('../assets/Kids-image/38.png');
                background-size: contain;
                border-radius: 50%;
                content: '';
                display: block;
                position: absolute;
                left: -40px;
                top: 6px;
            }
        }

        .item-6 {
            position: absolute;
            font-size: 22px;
            color: #fff;
            top: 470px;
            left: 60px;
            border-radius: 2px;
            color: #111;
            font-family: UTMBase;

            &::before {
                height: 24px;
                width: 24px;
                background-color: lightgreen;
                background-image: url('../assets/Kids-image/38.png');
                background-size: contain;
                border-radius: 50%;
                content: '';
                display: block;
                position: absolute;
                left: -40px;
                top: 6px;
            }
        }
    }

    // .item-7{
    //     position: absolute;
    //     background-image: url('../assets/Kids-image/37.png');
    //     height: 280px;
    //     width: 280px;
    //     background-size: contain;
    //     transform: rotate(-10deg);
    //     right: -150px;
    //     top: 200px;
    // }
}

.section-5 {
    height: 900px;
    background-color: rgb(248, 244, 244);

    .item-1 {
        position: absolute;
        top: 50px;
        left: 30px;
        color: #00afef;
        font-size: 32px;
        font-family: UTMCooper;

        &::before {
            content: '';
            display: block;
            height: 40px;
            top: 5px;
            width: 5px;
            left: -20px;
            background-color: #00afef;
            position: absolute;

            // background-image: url('../assets/');
        }
    }

    .item-2 {
        position: absolute;
        top: 150px;
        left: -30px;
        height: 700px;
        width: 700px;
        background-image: url('../assets/Kids-image/56.png');
        background-size: contain;

        &::before {
            content: '';
            display: block;
            height: 49px;
            width: 58px;
            background-repeat: no-repeat;
            background-image: url('https://w.ladicdn.com/s350x400/5cefbc1ed062e8345a24dfe8/isolation_mode-20230405171807-skzb7.png');
            background-size: contain;
            transform: rotate(270deg);
            position: absolute;
            top: 350px;
            left: 600px;
        }

        .sup-item-1 {
            position: absolute;
            top: 440px;
            left: 200px;
            font-size: 20px;
            max-width: 330px;
            text-align: justify;

            &::before {
                content: '';
                display: block;
                height: 100%;
                width: 5px;
                position: absolute;
                background-color: #00afef;
                left: -30px;
            }
        }

        .sup-item-2 {
            position: absolute;
            top: 580px;
            left: 220px;
            font-size: 20px;
            max-width: 300px;

            &::after {
                content: '';
                display: block;
                height: 24px;
                width: 24px;
                border-radius: 50%;
                position: absolute;
                background-color: lightgreen;
                background-image: url('../assets/Kids-image/38.png');
                background-size: contain;
                left: -40px;
                top: 0;
            }
        }

        .sup-item-3 {
            color: #fff;
            font-size: 24px;
            padding: 8px 20px;
            position: absolute;
            top: 620px;
            left: 375px;
            border-radius: 20px;
            background-color: #00afef;

            &:hover {
                background-color: #00bbff;
                cursor: pointer;
            }
        }
    }

    .item-3 {
        position: absolute;
        top: 150px;
        left: 530px;
        height: 700px;
        width: 700px;
        background-image: url('../assets/Kids-image/57.png');
        background-size: contain;

        .sup-item-1 {
            position: absolute;
            top: 440px;
            left: 200px;
            font-size: 17px;
            max-width: 330px;
            text-align: justify;

            &::before {
                content: '';
                display: block;
                height: 100%;
                width: 5px;
                position: absolute;
                background-color: #00afef;
                left: -30px;
            }
        }

        .sup-item-2 {
            position: absolute;
            top: 580px;
            left: 220px;
            font-size: 20px;
            max-width: 300px;

            &::after {
                content: '';
                display: block;
                height: 24px;
                width: 24px;
                border-radius: 50%;
                position: absolute;
                background-color: lightgreen;
                background-image: url('../assets/Kids-image/38.png');
                background-size: contain;
                left: -40px;
                top: 0;
            }
        }

        .sup-item-3 {
            color: #fff;
            font-size: 24px;
            padding: 8px 20px;
            position: absolute;
            top: 620px;
            left: 375px;
            border-radius: 20px;
            background-color: #00afef;

            &:hover {
                background-color: #00bbff;
                cursor: pointer;
            }
        }
    }
}

.section-6 {
    height: 800px;
    padding: 50px 0;
    background-image: url('../assets/Kids-image/Khung\ ảnh\ \(6\).png');
    background-position: 40% 0;
    background-attachment: fixed;

    .item-1 {
        font-size: 32px;
        color: #00afef;
        font-family: UTMCooper;
        text-align: center;
    }

    .item-2 {
        font-size: 20px;
        color: #111;
        font-family: UTMBaseItalic;
        text-align: center;
    }

    .item-3 {
        margin-top: 50px;
        height: 680px;
        width: 100%;
        background-image: url('../assets/Kids-image/73.png');
        background-size: contain;
    }
}

.section-7 {
    height: 1550px;
    padding: 50px 0;
    background-image: url('../assets/Kids-image/Khung\ ảnh\ \(7\).png');
    background-position: 40% 0;
    background-attachment: fixed;

    .item-1 {
        font-size: 32px;
        color: #fff;
        font-family: UTMCooper;
        text-align: center;
    }

    .item-2 {
        font-size: 20px;
        color: #fff;
        font-family: UTMBaseItalic;
        text-align: center;
    }

    .item-3 {
        font-size: 24px;
        color: #fff;
        font-family: UTMCooperItalic;
        padding: 10px 25px;
        background-color: #fff;
        color: #00afef;
        width: 220px;
        text-align: center;
        border-radius: 10px;
        position: absolute;
        top: 130px;
        left: 280px;

        &::after {
            content: '';
            display: block;
            position: absolute;
            height: 60px;
            width: 60px;
            background-image: url('../assets/Kids-image/40.png');
            background-size: contain;
            top: 0;
            left: 305px;
        }

        &:hover {
            transition-duration: .5s;
            font-size: 25px;
            cursor: pointer;
        }
    }

    .item-3-a {
        font-size: 24px;
        color: #fff;
        font-family: UTMCooperItalic;
        padding: 10px 25px;
        background-color: #fff;
        color: #00afef;
        width: 220px;
        text-align: center;
        border-radius: 10px;
        position: absolute;
        top: 130px;
        left: 680px;

        &:hover {
            transition-duration: .5s;
            font-size: 25px;
            cursor: pointer;
        }
    }

    .item-4 {
        height: 900px;
        width: 900px;
        background-image: url('../assets/Kids-image/54.png');
        background-size: contain;
        position: absolute;
        top: 190px;
        left: 150px;

        .sub-item-1 {
            height: 350px;
            width: 350px;
            position: absolute;
            top: 180px;
            left: 470px;
            background-image: url('../assets/Kids-image/58.png');
            background-size: contain;
        }

        .verified::after {
            height: 24px;
            width: 24px;
            content: '';
            display: block;
            position: absolute;
            background-color: lightgreen;
            background-image: url('../assets/Kids-image/38.png');
            background-size: contain;
            border-radius: 50%;
            top: 0;
            left: -30px;
        }

        .sub-item-2 {
            font-size: 16px;
            position: absolute;
            top: 440px;
            left: 510px;
            font-family: UTMBase;
        }

        .sub-item-3 {
            font-size: 16px;
            position: absolute;
            top: 480px;
            left: 510px;
            max-width: 330px;
            font-family: UTMBase;
            text-align: justify;
        }

        .sub-item-4 {
            font-size: 16px;
            position: absolute;
            top: 560px;
            left: 510px;
            max-width: 330px;
            font-family: UTMBase;
            text-align: justify;
        }

        .sub-item-5 {
            font-size: 16px;
            position: absolute;
            top: 620px;
            left: 510px;
            max-width: 330px;
            font-family: UTMBase;
            text-align: justify;
        }

        .sub-item-6 {
            font-size: 14px;
            position: absolute;
            top: 550px;
            left: 140px;
            max-width: 160px;
            transform: rotate(8deg);
            z-index: 5;
            font-family: UTMBase;
            text-align: justify;
        }

        .sub-item-7 {
            font-size: 16px;
            position: absolute;
            top: 450px;
            left: -100px;
            height: 700px;
            width: 500px;
            background-size: contain;
            font-family: UTMBase;
            text-align: justify;
            background-image: url('../assets/Kids-image/47.png');
            background-repeat: no-repeat;
        }
    }

    .item-4-a {
        height: 900px;
        width: 900px;
        background-image: url('../assets/Kids-image/55.png');
        background-size: contain;
        position: absolute;
        top: 190px;
        left: 150px;

        .sub-item-1 {
            height: 350px;
            width: 350px;
            position: absolute;
            top: 180px;
            left: 470px;
            background-image: url('../assets/Kids-image/58.png');
            background-size: contain;
        }

        .verified::after {
            height: 24px;
            width: 24px;
            content: '';
            display: block;
            position: absolute;
            background-color: lightgreen;
            background-image: url('../assets/Kids-image/38.png');
            background-size: contain;
            border-radius: 50%;
            top: 0;
            left: -30px;
        }

        .sub-item-2 {
            font-size: 16px;
            position: absolute;
            top: 440px;
            left: 510px;
            font-family: UTMBase;
        }

        .sub-item-3 {
            font-size: 16px;
            position: absolute;
            top: 480px;
            left: 510px;
            max-width: 330px;
            font-family: UTMBase;
            text-align: justify;
        }

        .sub-item-4 {
            font-size: 16px;
            position: absolute;
            top: 560px;
            left: 510px;
            max-width: 330px;
            font-family: UTMBase;
            text-align: justify;
        }

        .sub-item-5 {
            font-size: 16px;
            position: absolute;
            top: 620px;
            left: 510px;
            max-width: 330px;
            font-family: UTMBase;
            text-align: justify;
        }

        .sub-item-6 {
            font-size: 14px;
            position: absolute;
            top: 550px;
            left: 140px;
            max-width: 160px;
            transform: rotate(8deg);
            z-index: 5;
            font-family: UTMBase;
            text-align: justify;
        }

        .sub-item-7 {
            font-size: 16px;
            position: absolute;
            top: 450px;
            left: -100px;
            height: 700px;
            width: 500px;
            background-size: contain;
            font-family: UTMBase;
            text-align: justify;
            background-image: url('../assets/Kids-image/47.png');
            background-repeat: no-repeat;
        }
    }

    .item-6 {
        position: absolute;
        top: 1200px;
        left: 0;
        height: 450px;
        width: 100%;
        margin-left: 50px;

        .sub-item-1 {
            height: 250px;
            width: 250px;
            background-image: url('../assets/Kids-image/44.png');
            background-size: contain;
            cursor: pointer;
            overflow: visible;

            &::before {
                content: '';
                display: block;
                position: absolute;
                top: 190px;
                left: 25px;
                background-size: contain;
                background-image: url('../assets/Kids-image/62.png');
                height: 200px;
                width: 200px;
                z-index: 5;
            }

            &::after {
                content: '';
                display: block;
                position: absolute;
                top: 265px;
                left: 300px;
                background-size: contain;
                background-image: url('../assets/Kids-image/40.png');
                height: 60px;
                width: 60px;
                z-index: 5;
            }
        }

        .sub-item-2 {
            height: 250px;
            width: 250px;
            background-image: url('../assets/Kids-image/45.png');
            background-size: contain;
            cursor: pointer;
            overflow: visible;
            position: absolute;
            left: 400px;
            top: 0;

            &::before {
                content: '';
                display: block;
                position: absolute;
                top: 190px;
                left: 25px;
                background-size: contain;
                background-image: url('../assets/Kids-image/63.png');
                height: 200px;
                width: 200px;
                z-index: 5;
            }

            &::after {
                content: '';
                display: block;
                position: absolute;
                top: 265px;
                left: 300px;
                background-size: contain;
                background-image: url('../assets/Kids-image/40.png');
                height: 60px;
                width: 60px;
                z-index: 5;
            }
        }

        .sub-item-3 {
            height: 250px;
            width: 250px;
            background-image: url('../assets/Kids-image/46.png');
            background-size: contain;
            cursor: pointer;
            overflow: visible;
            position: absolute;
            left: 800px;
            top: 0;

            &::before {
                content: '';
                display: block;
                position: absolute;
                top: 190px;
                left: 25px;
                background-size: contain;
                background-image: url('../assets/Kids-image/64.png');
                height: 200px;
                width: 200px;
                z-index: 5;
            }
        }
    }

    .item-6-a {
        position: absolute;
        top: 1200px;
        left: 0;
        height: 450px;
        width: 100%;
        margin-left: 50px;

        .sub-item-1 {
            height: 250px;
            width: 250px;
            background-image: url('../assets/Kids-image/41.png');
            background-size: contain;
            cursor: pointer;
            overflow: visible;

            &::before {
                content: '';
                display: block;
                position: absolute;
                top: 190px;
                left: 25px;
                background-size: contain;
                background-image: url('../assets/Kids-image/62.png');
                height: 200px;
                width: 200px;
                z-index: 5;
            }

            &::after {
                content: '';
                display: block;
                position: absolute;
                top: 265px;
                left: 300px;
                background-size: contain;
                background-image: url('../assets/Kids-image/40.png');
                height: 60px;
                width: 60px;
                z-index: 5;
            }
        }

        .sub-item-2 {
            height: 250px;
            width: 250px;
            background-image: url('../assets/Kids-image/42.png');
            background-size: contain;
            cursor: pointer;
            overflow: visible;
            position: absolute;
            left: 400px;
            top: 0;

            &::before {
                content: '';
                display: block;
                position: absolute;
                top: 190px;
                left: 25px;
                background-size: contain;
                background-image: url('../assets/Kids-image/63.png');
                height: 200px;
                width: 200px;
                z-index: 5;
            }

            &::after {
                content: '';
                display: block;
                position: absolute;
                top: 265px;
                left: 300px;
                background-size: contain;
                background-image: url('../assets/Kids-image/40.png');
                height: 60px;
                width: 60px;
                z-index: 5;
            }
        }

        .sub-item-3 {
            height: 250px;
            width: 250px;
            background-image: url('../assets/Kids-image/43.png');
            background-size: contain;
            cursor: pointer;
            overflow: visible;
            position: absolute;
            left: 800px;
            top: 0;

            &::before {
                content: '';
                display: block;
                position: absolute;
                top: 190px;
                left: 25px;
                background-size: contain;
                background-image: url('../assets/Kids-image/64.png');
                height: 200px;
                width: 200px;
                z-index: 5;
            }
        }
    }
}

.section-8 {
    margin-top: 50px;
    height: 400px;

    .item-1 {
        font-size: 28px;
        color: #00afef;
        font-family: UTMCooper;
        max-width: 500px;
        margin-left: 30px;
        position: relative;

        &::after {
            content: '';
            height: 100%;
            width: 5px;
            display: block;
            position: absolute;
            left: -30px;
            background-color: #00afef;
            top: 0;
        }
    }

    .item-2 {
        font-family: UTMBase;
        margin-top: 20px;
        max-width: 550px;
    }

    .item-3 {
        font-family: UTMBaseBold;
        margin-top: 20px;
        max-width: 550px;
        font-size: 20px;
        margin-left: 40px;
        position: relative;

        &::before {
            content: '';
            height: 30px;
            width: 30px;
            background-color: lightgreen;
            background-image: url('../assets/Kids-image/38.png');
            background-size: contain;
            border-radius: 50%;
            display: block;
            left: -40px;
            top: 0;
            position: absolute;
        }
    }

    .item-4 {
        height: 350px;
        width: 500px;
        background-image: url('../assets/Kids-image/71.png');
        background-size: contain;
        position: absolute;
        background-repeat: no-repeat;
        top: 0;
        right: 0;
    }
}

.section-9 {
    height: 820px;
    background-image: url('../assets/Kids-image/Khung\ ảnh\ \(7\).png');
    background-position: 40% 0;
    background-attachment: fixed;

    .item-bg {
        background-size: cover;
        background-image: url('../assets/Kids-image/61.png');
        height: 1000px;
        width: 100%;
        margin-top: -180px;
        background-size: 101%;
        background-position-x: 0px;
    }

    .item-1 {
        font-family: UTMCooper;
        font-size: 32px;
        color: #fff;
        top: 20px;
        text-align: center;
        width: 100%;
        position: absolute;
    }

    .item-2 {
        font-family: UTMBase;
        font-size: 16px;
        color: #fff;
        top: 75px;
        text-align: center;
        width: 100%;
        position: absolute;
    }

    .item-3 {
        width: 48px;
        height: 48px;
        display: inline-block;
        position: absolute;
        top: 400px;
        left: 600px;

        &::after {
            content: '';
            box-sizing: border-box;
            width: 48px;
            height: 48px;
            border-radius: 50%;
            border: 2px solid #FFF;
            position: absolute;
            left: 0;
            top: 0;
            animation: animloader 2s linear infinite;
            animation-delay: 1s;
        }

        &::before {
            content: '';
            box-sizing: border-box;
            width: 48px;
            height: 48px;
            border-radius: 50%;
            border: 2px solid #FFF;
            position: absolute;
            left: 0;
            top: 0;
            animation: animloader 2s linear infinite;
        }
    }
}

.section-10 {
    height: 600px;
    background-image: url('../assets/Kids-image/Khung\ ảnh\ \(6\).png');
    background-position: 40% 0;
    background-attachment: fixed;

    .item-1 {
        font-family: UTMCooper;
        font-size: 32px;
        color: #00afef;
        top: 20px;
        text-align: center;
        width: 100%;
        position: absolute;
    }

    .item-2 {
        font-family: UTMBase;
        font-size: 20px;
        color: #222;
        top: 70px;
        text-align: center;
        width: 100%;
        position: absolute;
    }

    .item-3 {
        height: 400px;
        width: 240px;
        position: absolute;
        top: 130px;
        left: 320px;
        border-radius: 20px;
        background-color: #fff;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    }

    .item-4 {
        height: 400px;
        width: 500px;
        position: absolute;
        top: 130px;
        left: 540px;
        border-radius: 20px;
        background-size: contain;
        background-repeat: no-repeat;
        background-image: url('../assets/Kids-image/72.png');
    }
}

.section-11 {
    height: 600px;
    background-image: url('../assets/Kids-image/Khung\ ảnh\ \(7\).png');
    background-position: 40% 0%;
    background-attachment: fixed;
    padding-top: 50px;

    .item-1 {
        font-size: 32px;
        font-family: UTMCooper;
        color: #fff;
        position: relative;
        overflow: visible;
        padding: 0px 30px;

        &::before {
            content: '';
            height: 150%;
            width: 5px;
            position: absolute;
            display: block;
            background-color: #fff;
            left: 0px;
            top: 10px;
        }
    }

    .item-2 {
        font-size: 16px;
        font-family: UTMBase;
        color: #fff;
        position: relative;
        overflow: visible;
        padding: 10px 30px;
    }

    .item-3 {
        height: 550px;
        width: 550px;
        background-image: url('../assets/Kids-image/59.png');
        background-size: contain;
    }

    .item-4 {
        height: 550px;
        width: 550px;
        background-image: url('../assets/Kids-image/60.png');
        background-size: contain;
        position: absolute;
        top: 90px;
        right: 20px;
    }
}

.section-12 {
    height: 1200px;
    background-image: url('../assets/Kids-image/Khung\ ảnh\ \(6\).png');
    background-position: 40% 0;
    background-attachment: fixed;

    .item-1 {
        font-family: UTMCooper;
        font-size: 32px;
        color: #fff;
        top: 20px;
        text-align: center;
        width: 100%;
        position: absolute;
        background-color: #00afef;
        border-radius: 4px;
        padding: 10px 0;
    }

    .item-2 {
        font-family: UTMCooper;
        font-size: 32px;
        color: #00afef;
        top: 90px;
        text-align: center;
        width: 100%;
        position: absolute;
    }

    .item-3 {
        background-image: url('../assets/Kids-image/footer_img_1.jpg');
        height: 253px;
        width: 450px;
        background-size: contain;
        background-repeat: no-repeat;
        border-radius: 20px;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        position: absolute;
        top: 180px;
        left: 100px;
    }

    .item-4 {
        font-family: UTMCooper;
        font-size: 20px;
        color: #00afef;
        top: 205px;
        width: 100%;
        position: absolute;
        left: 590px;
        max-width: 400px;
    }

    .item-5 {
        font-family: UTMBase;
        font-size: 18px;
        color: #111;
        top: 285px;
        max-width: 450px;
        position: absolute;
        text-align: justify;
        left: 590px;
    }

    .item-6 {
        background-image: url('../assets/Kids-image/footer_img_2.jpg');
        height: 253px;
        width: 337px;
        background-size: contain;
        background-repeat: no-repeat;
        border-radius: 20px;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        position: absolute;
        top: 520px;
        left: 700px;
    }

    .item-7 {
        font-family: UTMCooper;
        font-size: 20px;
        color: #00afef;
        top: 520px;
        width: 100%;
        position: absolute;
        left: 340px;
        max-width: 400px;
    }

    .item-8 {
        font-family: UTMBase;
        font-size: 18px;
        color: #111;
        top: 570px;
        max-width: 450px;
        position: absolute;
        text-align: justify;
        left: 190px;
    }

    .item-9 {
        background-image: url('../assets/Kids-image/footer_img_1.jpg');
        height: 253px;
        width: 450px;
        background-size: contain;
        background-repeat: no-repeat;
        border-radius: 20px;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        position: absolute;
        top: 860px;
        left: 100px;
    }

    .item-10 {
        font-family: UTMCooper;
        font-size: 20px;
        color: #00afef;
        top: 880px;
        width: 100%;
        position: absolute;
        left: 590px;
        max-width: 400px;
    }

    .item-11 {
        font-family: UTMBase;
        font-size: 18px;
        color: #111;
        top: 960px;
        max-width: 450px;
        position: absolute;
        text-align: justify;
        left: 590px;
    }

}

@keyframes animloader {
    0% {
        transform: scale(0);
        opacity: 1;
    }

    100% {
        transform: scale(2);
        opacity: 0;
    }
}

@media (max-width: 768px) {
    .e-container {
        max-width: 600px;
    }

    .section-1 {
        height: 850px;

        .item-1 {
            top: 10px;
            left: 50px;
        }

        .item-2 {
            top: 40px;
            left: 140px;
        }

        .item-3 {
            font-size: 100px;
            left: 40px;
        }

        .item-4 {
            display: none;
        }

        .item-5 {
            font-family: UTMBaseBold;
            top: 200px;
            left: 130px;
        }

        .item-6 {
            top: 240px;
            left: 30px;
            text-align: center;
        }

        .item-7 {
            top: 310px;
            text-align: center;
            left: 20px;
        }

        .item-8 {
            top: 380px;
            left: 225px;
        }
    }

    .section-2 {
        .e-container {
            height: 300px;
            flex-wrap: wrap;

            .group {
                min-width: 300px;
                max-height: 150px;
            }
        }
    }

    .section-3 {
        height: 1200px;

        .item-1 {
            left: 250px !important;
        }

        .item-2 {
            left: 110px !important;
        }

        .item-3 {
            left: 265px !important;
        }

        .item-4 {
            left: 40px !important;
        }

        .item-5 {
            left: 70px !important;
        }

        .item-6 {
            left: 140px !important;
        }

        .item-7 {
            left: 320px !important;
        }

        .item-8 {
            left: 440px !important;
        }

        .item-9 {
            left: 65px !important;
        }

        .item-10 {
            left: 145px !important;
        }

        .item-11 {
            left: 200px !important;
        }

        .item-12 {
            left: 120px !important;
            top: 650px !important;
        }

        .item-13 {
            left: 160px !important;
            top: 640px !important;
        }

        .item-14 {
            left: 115px !important;
            top: 680px !important;
        }

        .input-group {
            left: 50px !important;
            top: 780px !important;
        }

        .item-bg-group {
            left: 50px !important;
            top: 630px !important;
        }

        .item-21 {
            left: 185px !important;
            top: 1070px !important;
        }

        .item-22 {
            left: 465px !important;
            top: 540px !important;
        }

        .item-23 {
            left: 0px !important;
            top: 1050px !important;
        }
    }

    .section-4 {
        height: 1300px;

        .section-group {
            .item-1 {
                left: 60px;
            }

            .item-2 {
                left: 40px;
            }

            .item-3 {
                left: 40px;
                top: 870px;
            }

            .item-4 {
                left: 80px;
                top: 980px;
            }

            .item-5 {
                left: 80px;
                top: 1090px;
            }

            .item-6 {
                left: 80px;
                top: 1200px;
            }
        }

        .section-image {
            margin-left: 40px;
            margin-top: 170px !important;
        }
    }

    .section-5 {
        height: 1600px;

        .item-2 {
            left: -50px;

            &::before {
                display: none;
            }
        }

        .item-3 {
            left: -50px;
            top: 870px;

            &::before {
                display: none;
            }
        }
    }

    .section-6 {
        height: 600px;

        .item-3 {
            background-repeat: no-repeat;
            width: 120%;
            margin-left: -55px;
        }
    }

    .section-7 {
        height: 1050px;

        .item-3 {
            left: 0px;

            &::after {
                left: 270px;
            }
        }

        .item-3-a {
            left: 330px;
        }

        .item-4 {
            top: 50px;
            left: -150px;
            transform: scale(.7);
        }

        .item-4-a {
            top: 50px;
            left: -150px;
            transform: scale(.7);
        }

        .item-6 {
            left: -160px;
            top: 750px;
            transform: scale(.5);
        }

        .item-6-a {
            left: -160px;
            top: 750px;
            transform: scale(.5);
        }
    }

    .section-8 {
        height: 750px;

        .item-4 {
            top: 350px;
            left: 70px;
        }
    }

    .section-9 {
        .item-2 {
            top: 120px;
        }

        .item-3 {
            top: 420px;
            left: 280px;
        }

        .item-bg {
            margin-top: 140px;
            background-repeat: no-repeat;
        }
    }

    .section-10 {
        .item-3 {
            left: 50px;
        }

        .item-4 {
            left: 240px;
        }
    }

    .section-11 {
        height: 1000px;

        .item-4 {
            left: 0px;
            top: 500px;
        }
    }

    .section-12 {
        height: 1850px;

        .item-2 {
            top: 150px;
        }

        .item-3 {
            left: 80px;
            top: 230px;
        }

        .item-4 {
            left: 80px;
            top: 530px;
        }

        .item-5 {
            left: 80px;
            top: 600px;
        }

        .item-6 {
            left: 140px;
            top: 770px;
        }

        .item-7 {
            left: 80px;
            top: 1050px;
        }

        .item-8 {
            left: 80px;
            top: 1090px;
        }

        .item-9 {
            left: 80px;
            top: 1300px;
        }

        .item-10 {
            left: 80px;
            top: 1580px;
        }

        .item-11 {
            left: 80px;
            top: 1650px;
        }
    }

    .submit-now-btn {
        left: calc(50% - 110px);
    }
}

@media (max-width: 480px) {
    .e-container {
        max-width: 330px;
    }

    .section-1 {
        height: 750px;

        .item-1 {
            left: 0;
        }

        .item-2 {
            left: 100px;
            font-size: 26px;
        }

        .item-3 {
            font-size: 62px;
            left: 0;
            top: 80px;
        }

        .item-5 {
            left: 5px;
            top: 170px;
            text-align: center;
        }

        .item-6 {
            left: 5px;
            top: 240px;
            text-align: center;
        }

        .item-7 {
            left: 5px;
            top: 340px;
            text-align: center;
        }

        .item-8 {
            left: 85px;
            top: 420px;
            text-align: center;
        }

        .item-9 {
            height: 300px;
            width: 300px;
            left: 10px;
        }
    }

    .section-2 {
        height: 600px;

        .e-container {
            height: 100%;
        }
    }

    .section-3 {
        height: 1350px;

        .e-container {
            .item-1 {
                left: 110px !important;
            }

            .item-2 {
                left: 0px !important;
                text-align: center;
            }

            .item-3 {
                top: 180px;
                left: 120px !important;
            }

            .item-4 {
                left: 0px !important;
                text-align: center;
            }

            .item-5 {
                right: 0px !important;
                border-radius: 20px;
            }

            .item-7 {
                top: 500px;
                left: 0px !important;
                border-radius: 20px;
            }

            .item-8 {
                top: 540px;
                left: 110px !important;
            }

            .item-9 {
                left: 0 !important;
                top: 630px;
            }

            .item-10 {
                left: 90px !important;
                top: 630px;
            }

            .item-11 {
                left: 140px !important;
                top: 630px;
                text-align: right;
            }

            .item-12 {
                left: 5px !important;
                top: 710px !important;
            }

            .item-13 {
                left: 30px !important;
                top: 700px !important;
            }

            .item-14 {
                left: 0px !important;
                top: 750px !important;
                text-align: center;
            }

            .item-bg-group {
                top: 700px !important;
                left: 0 !important;
                max-width: 100%;
            }

            .input-group {
                top: 830px !important;
                left: 0 !important;
                max-width: calc(100% - 60px);
                padding: 0 20px !important;
            }

            .item-21 {
                left: 50px !important;
                top: 1130px !important;
            }

            .item-22 {
                display: none;
            }

            .item-23 {
                left: -10px !important;
                top: 1160px !important;
            }
        }
    }

    .section-4 {
        height: 1210px;

        .item-1 {
            left: 320px !important;
            font-size: 24px !important;
            max-width: 300px !important;

            &::before {
                top: 0 !important;
            }
        }

        .section-image {
            height: 418px !important;
            margin-left: 0 !important;
        }

        .section-group {
            .item-2 {
                left: 303px !important;
                top: 100px;
            }

            .item-3 {
                left: 303px;
                top: 620px;
            }

            .item-4 {
                left: 303px;
                top: 780px;
            }

            .item-5 {
                left: 303px;
                top: 940px;
            }

            .item-6 {
                left: 303px;
                top: 1080px;
            }
        }
    }

    .section-5 {
        height: 1150px;

        .item-2 {
            height: 450px;
            width: 450px;
            left: -55px;
            top: 200px;

            .sup-item-1 {
                top: 275px;
                left: 130px;
                font-size: 14px;
                max-width: 210px;

                &::before {
                    left: -20px;
                }
            }

            .sup-item-2 {
                top: 370px;
                left: 144px;
                font-size: 14px;
                line-height: 26px;
            }

            .sup-item-3 {
                font-size: 18px;
                padding: 4px 15px;
                top: 396px;
                left: 224px;
            }
        }

        .item-3 {
            height: 450px;
            width: 450px;
            left: -55px;
            top: 660px;

            .sup-item-1 {
                top: 275px;
                left: 130px;
                font-size: 11.5px;
                max-width: 210px;

                &::before {
                    left: -20px;
                }
            }

            .sup-item-2 {
                top: 370px;
                left: 144px;
                font-size: 14px;
                line-height: 26px;
            }

            .sup-item-3 {
                font-size: 18px;
                padding: 4px 15px;
                top: 396px;
                left: 224px;
            }
        }
    }

    .section-6 {
        .item-3 {
            margin-left: -31px;
        }
    }

    .section-7 {
        .e-container {
            max-width: 360px;

            .item-3 {
                top: 173px;
                left: 50px;

                &::after {
                    left: 110px;
                    transform: rotate(90deg);
                    top: 60px;
                }
            }

            .item-3-a {
                left: 50px;
                top: 295px;
            }

            .item-4 {
                transform: scale(0.4);
                left: -268px;
                top: 100px;
            }

            .item-4-a {
                transform: scale(0.4);
                left: -268px;
                top: 100px;
            }

            .item-6 {
                left: -140px;
                top: 650px;

                .sub-item-1 {
                    &::after {
                        top: 205px;
                        left: 214px;
                    }
                }

                .sub-item-2 {
                    left: 240px;

                    &::after {
                        top: 205px;
                        left: 214px;
                    }
                }

                .sub-item-3 {
                    left: 480px;
                }
            }

            .item-6-a {
                left: -140px;
                top: 650px;

                .sub-item-1 {
                    &::after {
                        top: 205px;
                        left: 214px;
                    }
                }

                .sub-item-2 {
                    left: 240px;

                    &::after {
                        top: 205px;
                        left: 214px;
                    }
                }

                .sub-item-3 {
                    left: 480px;
                }
            }
        }
    }

    .section-8 {
        .item-4 {
            transform: scale(0.7);
            top: 423px;
            left: -67px;
        }
    }

    .section-9 {
        height: 500px;

        .item-1 {
            font-size: 30px;
        }

        .item-3 {
            top: 282px;
            left: 142px;
        }
    }

    .section-10 {
        height: 1100px;

        .item-2 {
            top: 125px;
        }

        .item-3 {
            top: 200px;
        }

        .item-4 {
            left: -35px;
            top: 650px;
        }
    }

    .section-11 {
        height: 750px;

        .item-3 {
            height: 340px;
            width: 340px;
        }

        .item-4 {
            height: 340px;
            width: 340px;
            top: 450px;
        }
    }

    .section-12 {
        height: 1750px;

        .item-1 {
            font-size: 23px;
        }

        .item-2 {
            font-size: 23px;
            top: 130px;
        }

        .item-3 {
            transform: scale(0.7);
            left: -60px;
            top: 190px;
        }

        .item-4 {
            left: 0;
            top: 440px;
            text-align: center;
        }

        .item-5 {
            left: 0;
            top: 510px;
        }

        .item-6 {
            transform: scale(0.85);
            left: -2px;
            top: 690px;
        }

        .item-7 {
            left: 0;
            top: 950px;
            text-align: center;
        }

        .item-8 {
            left: 0;
            top: 1000px;
        }

        .item-9 {
            transform: scale(0.7);
            left: -60px;
            top: 1220px;
        }

        .item-10 {
            left: 0;
            top: 1460px;
            text-align: center;
        }

        .item-11 {
            left: 0;
            top: 1550px;
        }
    }
}
</style>