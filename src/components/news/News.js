import React, { Component } from "react";
import { observer } from "mobx-react";
import { observable } from "mobx";
import { Link } from "react-router-dom";
@observer
class News extends Component {
    @observable data = {
        email: "",
        password: ""
    };

    render() {
        return (
            <section id="category" class="content">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="banner_product">
                                <img src="./../../images/banner_product.jpg" class="img-responsive" />
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-sm-12">
                            <div class="title_page">
                                <ul class="list-inline">
                                    <li><a href="index.html">Trang chủ</a></li>
                                    <li><i class="fa fa-angle-right" aria-hidden="true"></i></li>
                                    <li>Tin tức</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-lg-9 col-md-9 col-sm-12">
                            <div class="row">
                                <div class="col-sm-12">
                                    <div class="title_name">
                                        <h4>Tin tức</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="row m_bottom">
                                <div class="col-sm-5">
                                    <div class="new_img hover8">
                                        <div class="img hover_img">
                                            <a href="viewNews.html?id=1"><img src="./../../uploads/news/15298991291528088452new_01.jpg"
                                                class="img-responsive" /></a>
                                        </div>
                                        <div class="date">
                                            <span class="ngay">04</span> <br /><span class="thang">Tháng 06</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-7">
                                    <div class="new_text">
                                        <div class="n_des">
                                            <a href="viewNews.html?id=1">Những đồ ăn tưởng béo mà lại tốt cho sức khỏe</a>
                                        </div>
                                        <div class="des">
                                            Nếu ăn đúng cách, pizza, kem hay cappuccino sẽ không còn là món gây tăng cân nữa teen
                                    nhé. </div>
                                        <div class="see">
                                            <a href="viewNews.html?id=1">Xem tiếp <i class="fa fa-angle-double-right"
                                                aria-hidden="true"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row m_bottom">
                                <div class="col-sm-5">
                                    <div class="new_img hover8">
                                        <div class="img hover_img">
                                            <a href="viewNews.html?id=2"><img src="./../../uploads/news/1528088761new_04.jpg"
                                                class="img-responsive" /></a>
                                        </div>
                                        <div class="date">
                                            <span class="ngay">04</span> <br /> <span class="thang">Tháng 06</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-7">
                                    <div class="new_text">
                                        <div class="n_des">
                                            <a href="viewNews.html?id=2">Shushi và những lợi ích bất ngờ</a>
                                        </div>
                                        <div class="des">
                                            Sushi là một món ăn truyền thống của người Nhật và đã được phổ biến ở rất nhiều quốc gia
                                            trên thế giới. Nhờ vào nguồn dinh dưỡng phong phú, tốt cho sức khỏe, hương vị hấp dẫn,
                                    cách trình bày đẹp mắt, món ăn này đã được rất nhiều người yêu thích. </div>
                                        <div class="see">
                                            <a href="viewNews.html?id=2">Xem tiếp <i class="fa fa-angle-double-right"
                                                aria-hidden="true"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row m_bottom">
                                <div class="col-sm-5">
                                    <div class="new_img hover8">
                                        <div class="img hover_img">
                                            <a href="viewNews.html?id=3"><img src="./../../uploads/news/15298996511528088988new_05.jpg"
                                                class="img-responsive" /></a>
                                        </div>
                                        <div class="date">
                                            <span class="ngay">04</span> <br /> <span class="thang">Tháng 06</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-7">
                                    <div class="new_text">
                                        <div class="n_des">
                                            <a href="viewNews.html?id=3">Những món ăn đốn tim du khách tại hội chợ lâu đời nhất phố
                                        hội</a>
                                        </div>
                                        <div class="des">
                                            Chợ nằm ở điểm giao của các con phố Trần Phú, Bạch Đằng và Nguyễn Thái Học, ngay trung
                                            tâm phố cổ. Bạn chỉ mất vài phút tản bộ là có thể đến với khu chợ này và thưởng thức
                                    những món ăn đường phố đặc trưng của Hội An. </div>
                                        <div class="see">
                                            <a href="viewNews.html?id=3">Xem tiếp <i class="fa fa-angle-double-right"
                                                aria-hidden="true"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row m_bottom">
                                <div class="col-sm-5">
                                    <div class="new_img hover8">
                                        <div class="img hover_img">
                                            <a href="viewNews.html?id=4"><img src="./../../uploads/news/1530581874new_08.jpeg"
                                                class="img-responsive" /></a>
                                        </div>
                                        <div class="date">
                                            <span class="ngay">03</span> <br /> <span class="thang">Tháng 07</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-7">
                                    <div class="new_text">
                                        <div class="n_des">
                                            <a href="viewNews.html?id=4">Tìm hiểu về những điều thú vị của Cappuchino</a>
                                        </div>
                                        <div class="des">
                                            Cappuccino là gì? Cappcuccino là loại café đã quá quen thuộc với người dân toàn thế
                                            giới. Vậy bạn có biết Cappuccino xuất xứ từ đâu, được pha chế như thế nào và vì sao có
                                    thể chinh phục cả thế giới? </div>
                                        <div class="see">
                                            <a href="viewNews.html?id=4">Xem tiếp <i class="fa fa-angle-double-right"
                                                aria-hidden="true"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row m_bottom">
                                <div class="col-sm-5">
                                    <div class="new_img hover8">
                                        <div class="img hover_img">
                                            <a href="viewNews.html?id=5"><img src="./../../uploads/news/1530671967new_06.jpg"
                                                class="img-responsive" /></a>
                                        </div>
                                        <div class="date">
                                            <span class="ngay">04</span> <br /> <span class="thang">Tháng 07</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-7">
                                    <div class="new_text">
                                        <div class="n_des">
                                            <a href="viewNews.html?id=5">8 món ăn vặt giải nhiệt cho mùa hè Hà Nội</a>
                                        </div>
                                        <div class="des">
                                            Điểm danh những món ăn vặt được giới trẻ Hà thành ưu chuộng trong những ngày hè nóng
                                    bức. Bạn thích món nào nhất? </div>
                                        <div class="see">
                                            <a href="viewNews.html?id=5">Xem tiếp <i class="fa fa-angle-double-right"
                                                aria-hidden="true"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div class="row text-center p_navigation">
                                <nav aria-label="Page navigation">
                                    <ul class="pagination">
                                        <li>
                                            <a href="category.html?page=1" aria-label="Previous">
                                                <sppro aria-hidden="true">&laquo;</sppro>
                                            </a>
                                        </li>
                                        <li class="active"><a href="category.html?page=1">1</a></li>
                                        <li>
                                            <a href="category.html?page=1" aria-label="Next">
                                                <sppro aria-hidden="true">&raquo;</sppro>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                            <div class="sidebar">
                                <div class="sb_item">
                                    <h4>Danh mục</h4>
                                    <ul class="list-unstyled menu1">
                                        <li><a href="danh-muc.html?id=1">Món khai vi</a></li>
                                    </ul>
                                    <ul class="list-unstyled menu1">
                                        <li><a href="danh-muc.html?id=2">Thức ăn nhanh</a></li>
                                    </ul>
                                    <ul class="list-unstyled menu1">
                                        <li><a href="danh-muc.html?id=3">Mỳ</a></li>
                                    </ul>
                                    <ul class="list-unstyled menu1">
                                        <li><a href="danh-muc.html?id=4">Đồ uống</a></li>
                                    </ul>
                                    <ul class="list-unstyled menu1">
                                        <li><a href="danh-muc.html?id=5">BBQ</a></li>
                                    </ul>
                                    <ul class="list-unstyled menu1">
                                        <li><a href="danh-muc.html?id=6">Hải sản</a></li>
                                    </ul>
                                    <ul class="list-unstyled menu1">
                                        <li><a href="danh-muc.html?id=7">Khác</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        );
    }
}

export default News;
