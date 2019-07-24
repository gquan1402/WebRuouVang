import React, { Component } from "react";
import { observer } from "mobx-react";
import { observable } from "mobx";
import { Link } from "react-router-dom";
@observer
class IntroduceComponent extends Component {
    @observable data = {
        email: "",
        password: ""
    };

    render() {
        return (
            <div class="content">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="banner_product">
                                <img src="images/banner_product.jpg" class="img-responsive" />
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-sm-12">
                            <div class="title_page">
                                <ul class="list-inline">
                                    <li>Trang chủ</li>
                                    <li><i class="fa fa-angle-right" aria-hidden="true"></i></li>
                                    <li>Giới thiệu</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-sm-12">
                            <div class="introduce">
                                <h2>Giới thiệu chung</h2>
                            </div>
                            <div class="intro_content">
                                <p>“Bạn muốn mua rượu vang để phục vụ cho những bữa tiệc cùng bạn bè và gia đình, để biếu tặng, kinh doanh.
                                     ruouvangHQT sinh ra với sứ mệnh mang đến cho toàn thể quý khách hàng những nét đẹp về văn hóa rượu vang,
                                     những kiến thức bổ ích và lợi ích của rượu vang, với những sản phẩm rượu vang nhập khẩu chính hãng”</p>
                                <p>Rượu vang là một trong những đồ uống được tiêu thụ nhiều hàng đầu Thế giới và có tuổi đời lên đến hàng nghìn năm.
                                    Ngày nay trong những bữa tiệc sang trọng đã dần trở nên không thể thiếu được sự kết hợp với rượu vang.
                                    Đồ uống duy nhất có thể kết hợp được với đồ ăn khiến những món ăn trở nên đậm đà và tinh tế hơn.</p>
                                <p>Shop ruouvangHQT với nhiều năm kinh nghiệm trong lĩnh vực nhập khẩu và cung cấp các sản phẩm rượu vang chất lượng tốt nhất ở Việt Nam hiện nay.
                                    Tất cả các sản phẩm của chúng tôi đều từ những hầm rượu nổi tiếng trên thế giới
                                    và được lựa chọn kỹ lưỡng bởi các chuyên gia nếm thử hàng đầu Việt Nam.</p>

                                <p>Đến với ruouvangHQT, quý khách sẽ được khám phá sự phong phú về các dòng rượu vang đến từ các quốc
                                    gia nổi tiếng trên thế giới. Bên cạnh đó, quý khách sẽ được nhân viên tư vấn tận tình và đặc biệt
                                    quý khách có thể nếm thử miễn phí trước khi quyết định chọn mua. ruouvangHQT cam kết cung cấp những
                                    chai rượu vang được nhập khẩu chính hãng, mỗi chai rượu luôn có suất sứ rõ ràng, đảm bảo chất lượng
                                    và luôn được bảo quản tốt nhất trong kho lạnh theo đúng tiêu chuẩn. Tại ruouvangHQT khách hàng sẽ được
                                     tận hưởng những dịch vụ mà khó có đơn vị nào cung cấp rượu vang nào đáp ứng được:</p>
                                <p>– Uống thử rượu vang miễn phí: Mục tiêu tối thượng của chúng tôi là giúp bạn chọn loại rượu vang chuẩn gu của mình!</p>
                                <p>– Yên tâm về chất lượng của rượu: Toàn bộ rượu vang của ruouvangHQT được nhập khẩu trực
                                    tiếp từ nhà sản xuất và có đầy đủ giấy tờ hải quan để đảm bảo về chất lượng của sản phẩm.</p>

                                <p>– Đổi, trả sản phẩm nếu không vừa lòng: Duy nhất chỉ có tại ruouvangHQT.
                                     Chúng tôi luôn mong muốn khách hàng của mình được hài lòng nhất về sản phẩm mình đã mua</p>
                                <div class="hover8">
                                    <div class="hover_img">
                                        <img src="images/foody-mobile-asdasd-jpg-595-636310426618632554.jpg" class="img-responsive" id="img_center" />
                                    </div>
                                </div>
                                <p>– Tư vấn cách thưởng thức cũng như chia sẻ các thông tin thú vị về rượu vang: Đội ngũ tư vấn tận tình giàu kinh nghiệm và website Vangchat.com.vn sẽ giúp bạn cảm thấy rượu vang thú vị và đặc sắc hơn bất cứ đồ uống nào khác.</p>
                                <p>– Đảm bảo giá tốt nhất thị trường: Chúng tôi luôn cung cấp những sản phẩm rượu vang nhập khẩu đúng nhất với giá trị thực của chai rượu</p>
                                <p>– Phục vụ 24/24, giao hàng miễn phí: Số hotline luôn luôn sẵn sàng phục vụ bạn, kể cả trong những dịp lễ tết, đội ngũ giao hàng luôn phục vụ khách hàng nhanh nhất,mọi nơi, mọi lúc</p>

                                <p>– Hỗ trợ về thiết kế, in ấn các sản phẩm truyền thông: Khách hàng là nhà hàng, cửa hiệu hoặc shop cá nhân có nhu cầu thiết kế menu, biển bảng… được chúng tôi hỗ trợ hoàn toàn miễn phí.</p>
                                <h3>Kết!</h3>
                                <p>Nào như vậy thì bạn còn chần chừ gì nữa hãy đến với shop để tìm cho mình sản phẩm mà mình mong muốn nhất và chỉ cần một cú click chuột đơn giản đơn giản sẽ được giao đến bạn sớm nhất.Hãy tận hưởng tinh hoa ẩm thực ngay thôi! </p>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default IntroduceComponent;
