import React from "react";
import { Box, Typography } from "@mui/material";
import bgStory from "assets/image/bgStory.png";
import { useStyles } from "./style";
import { theme } from "theme";

interface IContent {
  txtTitle: string;
  txtSubtitle: string;
  content: string;
  icon: string;
  color: string;
  isIconRight?: boolean;
}

const OurStory = () => {
  const classes = useStyles();

  const renderContent = ({
    txtTitle,
    txtSubtitle,
    content,
    icon,
    color,
    isIconRight,
  }: IContent) => {
    return (
      <Box style={{ display: "flex" }}>
        {!isIconRight && (
          <Box>
            <img style={{ maxWidth: 50, marginRight: 10 }} src={icon} alt="" />
          </Box>
        )}
        <Box>
          <Typography
            fontWeight="bold"
            variant="h5"
            component="h2"
            style={{
              color: color,
            }}
            className={classes.txtTitle}
          >
            {txtTitle}
          </Typography>
          <Typography
            style={{
              color: color,
            }}
            className={classes.txtSubtitle}
          >
            {txtSubtitle}
          </Typography>
          <Typography className={classes.txtContent}>{content}</Typography>
        </Box>
        {isIconRight && (
          <Box>
            <img style={{ maxWidth: 50, marginLeft: 10 }} src={icon} alt="" />
          </Box>
        )}
      </Box>
    );
  };

  return (
    <Box
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        marginBottom: 100,
        marginTop: 50,
      }}
    >
      <img
        style={{
          height: " auto",
          maxWidth: "65%",
          verticalAlign: "top",
          margin: "0 auto",
          marginTop: 0,
          display: "block",
        }}
        src={bgStory}
        alt=""
      />
      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingLeft: 0,
          paddingRight: 0,
          marginLeft: "auto",
          marginRight: "auto",
          gap: 30,
        }}
      >
        <Box className={classes.wrapperContent}>
          <Box>
            {renderContent({
              txtTitle: "Package",
              txtSubtitle: "Gói thuê bao",
              content: ` “Không còn phải tính toán ngày mai ăn gì, TBR sẽ thay bạn làm điều đó bằng việc cung cấp cho gia đình bạn bữa ăn hoàn chỉnh trong cả tuần, không chỉ dừng lại ở rau củ quả mà còn hướng tới đầy đủ các thành phần: thịt, cá, trứng, đậu,...Các gói sản phẩm của chúng tôi được tính toán & tư vấn bởi chuyên gia dựa trên chế độ dinh dưỡng, sở thích, tình trạng sức khỏe và vẫn đảm bảo độ đa dạng cần thiết cho cả 1 tuần`,
              icon: "https://pfarm.vn/wp-content/themes/pfarm/assets/img/pfarm/icon.png",
              color: "#82bd1a",
            })}
          </Box>
          <Box style={{ marginTop: 50 }}>
            {renderContent({
              txtTitle: "Powerful",
              txtSubtitle: "Sức khỏe nội lực",
              content: `Cuối cùng, với năng lực nền tảng công nghệ & hệ thống cửa hàng phủ khắp mọi nơi, cùng đội ngũ vận hành chuyên nghiệp và sản phẩm được tuyển chọn khắt khe nhất, TBR sẽ đem lại cho KH sự thuận tiện, sản phẩm chất lượng nhất cho bạn & gia đình. Chúng tôi hướng đến việc thay đổi thói quen người dân Việt Nam mua sắm hàng ngày, để người dân Việt Nam ngày càng có cuộc sống thuận tiện & khỏe mạnh hơn`,
              icon: "https://pfarm.vn/wp-content/themes/pfarm/assets/img/pfarm/icon3.png",
              color: "#ef977f",
            })}
          </Box>
        </Box>
        <Box
          className={classes.wrapperContent}
          style={{
            // background:
            //   "url('https://pfarm.vn/wp-content/themes/pfarm/assets/img/pfarm/Rectangle.png') no-repeat",
            minHeight: 655,
            marginTop: -60,
            zIndex: -1,
            boxSizing: "border-box",
            padding: "60px 15px 15px 15px",
            color: "#ffff",
            display: "flex",
            textAlign: "center",
            flexDirection: "column",
            backgroundColor: theme.palette.primary.main,
          }}
        >
          <Typography
            fontWeight="bold"
            variant="h5"
            component="h2"
            style={{ fontSize: 30, marginBottom: 25 }}
          >
            OUR STORY
          </Typography>
          <Typography>
            TBR tin tưởng rằng, Dự án sản xuất và kinh doanh Dịch vụ Cung cấp
            Gói Rau An Toàn (Rau Sức Khỏe) tận nơi theo hình thức Thuê Bao Tháng
            tối ưu hóa tiện ích, tiện lợi, mà TBR Tiên phong theo đuổi, sẽ mang
            đến không chỉ những Trải nghiệm hoàn toàn mới cho Người tiêu dùng có
            Nhu cầu sử dụng Nông sản/ Thực phẩm Sạch, mà đồng thời, cũng có thể
            trở thành, “1 làn gió mát”, góp phần thay đổi nền sản xuất và cung
            ứng dịch vụ Nông nghiệp Việt Nam mãi mãi... signature2 Quân Idea
            Founder TBR
          </Typography>
        </Box>
        <Box className={classes.wrapperContent}>
          <Box>
            {renderContent({
              txtTitle: "Protect",
              txtSubtitle: "Bảo vệ",
              content: `Với tiêu chí "An toàn thực phẩm cho bạn là trách nhiệm của chúng tôi" - sản phẩm của TBR luôn hướng đến việc đảm bảo sản phẩm có mức độ an toàn cao nhất nhằm bảo vệ sức khỏe của bạn & gia đình. Không còn nỗi lo thực phẩm không rõ nguồn gốc, quá hạn,sản phẩm của TBR có xuất xứ từ các đơn vị uy tín, và sẽ được giao đến tay bạn vào buổi sáng để đảm bảo độ tươi của sản phẩm`,
              icon: "https://pfarm.vn/wp-content/themes/pfarm/assets/img/pfarm/icon2.png",
              color: "#ecc347",
              isIconRight: true,
            })}
          </Box>
          <Box style={{ marginTop: 50 }}>
            {renderContent({
              txtTitle: "People",
              txtSubtitle: "Con người",
              content: `Với tiêu chí lấy con người làm trung tâm, TBR chúng tôi luôn nỗ lực đem đến sự hài lòng tốt nhất cho bạn. Không ngừng nâng cao chất lượng sản phẩm, cải tiến dịch vụ, sẵn sàng lắng nghe các phản hồi & góp ý, khiếu nại từ phía khách hàng để đem lại những lợi ích vượt trội cho bạn & gia đình`,
              icon: "https://pfarm.vn/wp-content/themes/pfarm/assets/img/pfarm/icon4.png",
              color: "#89d7f0",
              isIconRight: true,
            })}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default OurStory;
