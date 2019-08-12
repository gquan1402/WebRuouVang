import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { observable } from "mobx";
@inject('store')
@observer
class ViewNews extends Component {
  @observable News = [];
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section >
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="banner_product">
                <img src="images/banner_product.jpg" className="img-responsive" />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12">
              <div className="title_page">
                <ul className="list-inline">
                  <li>Trang chủ</li>
                  <li><i className="fa fa-angle-right" aria-hidden="true"></i></li>
                  <li>Tin tức</li>
                  <li><i className="fa fa-angle-right" aria-hidden="true"></i></li>
                  <li>
                    {this.props.store.New.news_title}					</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12">
              <div className="row">
                <div className="col-sm-3"></div>
                <div className="col-sm-6"><img src={this.props.store.New.news_image} className="img-responsive"></img></div>
                <div className="col-sm-3"></div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <div className="title_name">
                    <h4>
                      {this.props.store.New.news_title}
                      <p className="title_date" style={{ fontSize: '10px' }}>Ngày đăng tin: 08/08/2019 lúc 12:00:52</p>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="row p_Detail">
                <div className="col-sm-12">
                  <div className="view_detail">
                    <div className="info-description-article clearfix">
                      <h4>Đã bao giờ bạn thắc mắc tại sao lại có những lon bia rẻ hơn bình thường hay chưa? Nếu có thì sản phẩm của những công xưởng làm bia giả dưới đây chính là câu trả lời dành cho bạn.</h4>

                      <p>Vào hồi đầu tháng 5, lực lượng chức năng thành phố Đông Quản, tỉnh Quảng Đông, Trung Quốc đã triệt phá một đường dây chuyên làm bia giả, thu giữ hàng trăm nghìn lon bia được làm nhái theo nhãn hiệu nổi tiếng Budweiser và bia chai Heineken.</p>
                      <p>Qua đoạn video do lực lượng chức năng cung cấp, có thể thấy các nữ công nhân rửa lon bia được tái sử dụng một cách sơ sài trong thùng nước đục màu.</p>
                      <p>Tiếp đó, bia giả được đổ đầy vào lon nhôm mang nhãn hiệu Budweiser. Công đoạn đóng lon được đơn giản hóa bằng một dây chuyền đơn sơ nhưng khá năng suất.<br />Được biết, mỗi ngày công xưởng làm bia giả này sản xuất tới hàng ngàn lon bia nhái Budweiser. Ước tính có tới hơn 60.000 lon bia giả của xưởng sản xuất này được tung ra thị trường mỗi tháng, và chủ yếu được tiêu thụ trong các quán karaoke, hộp đêm…</p>
                      <p>Dây chuyền sản xuất tuy đơn sơ nhưng khá năng suất.<br />Lực lượng chức năng nhanh chóng tiến hành kiểm tra và thu giữ tang vật, đồng thời truy cứu trách nhiệm của những người có liên quan.<br />Những hình ảnh về xưởng sản xuất bia giả kể trên được đăng tải rộng rãi trên các phương tiện truyền thông Trung Quốc đã khiến cho người dân nước này không khỏi hoang mang.<br />Việc phát hiện các cơ sở sản xuất bia và rượu giả không mới, nhất là tại Trung Quốc. Cũng mới đây, cơ quan chức năng nước này từng phát hiện một xưởng bia nhái thương hiệu Heineken với quy trình sản xuất hàng ngàn lon mỗi ngày. Người tiêu dùng khi uống phải những lon bia này chắc chắn sẽ gặp nhiều nguy hiểm về sức khỏe.
                      <br /></p>
                      <p></p>
                      Quy trịnh sản xuất bia Heineken giả<br />Một số bạn trẻ cho biết: “Thật kinh khủng! Không biết là tôi đã uống bao nhiêu lon Budweiser rồi.”,<br />“Chắc từ giờ không dám uống Budweiser luôn.”<br />“Kinh nghiệm xương máu là đừng bao giờ uống bia rượu trong quán karaoke hay bar sàn.”<br />“Vẫn biết là đồ uống ở hàng quán không đáng tin, nhưng đến mức này thì thật quá đáng!”…


                    </div>

                  </div>
                </div>
              </div>
              <div className="row p_Detail">
                <div className="col-sm-12">
                  <div className="author_info">
                    Anh Quân							<i className="fa fa-pencil" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ViewNews;
