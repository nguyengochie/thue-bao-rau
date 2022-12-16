import React from "react";
import { Box, Typography } from "@mui/material";
import bgStory from "assets/image/bgStory.png";
import { useStyles } from "./style";

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
              txtTitle: "Peace",
              txtSubtitle: "Hòa bình",
              content: ` “An ninh lương thực” là 1 vấn đề mang tính toàn cầu và luôn là
                vấn đề trọng yếu của tất cả mọi quốc gia trên thế giới. Ở P Farm
                chúng tôi tâm niệm rằng, chỉ khi chúng ta được đảm bảo cung ứng/
                cung cấp Đủ nguồn Lương thực/ Thực phẩm Sạch, đáp ứng những Tầng
                nhu cầu đầu tiên và cũng là Nền móng của Tháp nhu cầu Maslow,
                thì khi đó, “Phú Quý” mới “Sinh Lễ Nghĩa” được. Khi và chỉ khi
                “Tâm Vui Vẻ”, con người ta mới có thể: “Người với người sống để
                yêu nhau”, trở thành Gốc Rễ sản sinh ra 1 Thế giới Hòa bình!`,
              icon: "https://pfarm.vn/wp-content/themes/pfarm/assets/img/pfarm/icon.png",
              color: "#82bd1a",
            })}
          </Box>
          <Box style={{ marginTop: 50 }}>
            {renderContent({
              txtTitle: "Powerful",
              txtSubtitle: "Sức khỏe nội lực",
              content: `Masanobu Fukuoka (1913-2008) – 1 Người nông dân, 1 Triết gia, đồng thời cũng là cha 
              đẻ của Thuật ngữ “Nông nghiệp Tự nhiên” (gốc ý trong tiếng Nhật: “Nông hóa Tự nhiên”, 
                tiếng Anh: Natural Farming) từng có 1 câu nói trong “Cuộc cách mạng 1 cọng rơm”,
               đại ý: “Nếu cây lúa khỏe, thì bản thân nó đã có thể đánh bại cây cỏ hại!”`,
              icon: "https://pfarm.vn/wp-content/themes/pfarm/assets/img/pfarm/icon3.png",
              color: "#ef977f",
            })}
          </Box>
        </Box>
        <Box
          className={classes.wrapperContent}
          style={{
            background:
              "url('https://pfarm.vn/wp-content/themes/pfarm/assets/img/pfarm/Rectangle.png') no-repeat",
            minHeight: 655,
            marginTop: -60,
            zIndex: -1,
            boxSizing: "border-box",
            padding: "60px 15px 15px 15px",
            color: "#ffff",
            display: "flex",
            textAlign: "center",
            flexDirection: "column",
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
            P Farm tin tưởng rằng, Dự án sản xuất và kinh doanh Dịch vụ Cung cấp
            Gói Rau An Toàn (Rau Sức Khỏe) tận nơi theo hình thức Thuê Bao Tháng
            tối ưu hóa tiện ích, tiện lợi, mà P Farm Tiên phong theo đuổi, sẽ
            mang đến không chỉ những Trải nghiệm hoàn toàn mới cho Người tiêu
            dùng có Nhu cầu sử dụng Nông sản/ Thực phẩm Sạch, mà đồng thời, cũng
            có thể trở thành, “1 làn gió mát”, góp phần thay đổi nền sản xuất và
            cung ứng dịch vụ Nông nghiệp Việt Nam mãi mãi... signature2 Quân
            Idea Founder P Farm
          </Typography>
        </Box>
        <Box className={classes.wrapperContent}>
          <Box>
            {renderContent({
              txtTitle: "Protect",
              txtSubtitle: "Bảo vệ",
              content: `Martin Lutherking - nhà hoạt động nhân quyền người Mĩ gốc Phi, từng đoạt giải
             Nobel Hòa Bình năm 1964, cho rằng: “Trong thế giới này, chúng ta không chỉ xót xa trước lời nói 
            và hành động của kẻ xấu mà còn cả vì sự im lặng đến đáng sợ của những người tốt”. Xem thêm`,
              icon: "https://pfarm.vn/wp-content/themes/pfarm/assets/img/pfarm/icon2.png",
              color: "#ecc347",
              isIconRight: true,
            })}
          </Box>
          <Box style={{ marginTop: 50 }}>
            {renderContent({
              txtTitle: "People",
              txtSubtitle: "Con người",
              content: `Với tiêu chí luôn lấy Con người làm Trung Tâm, là Yếu tố Quan trọng nhất
               Chi phối toàn bộ các hoạt động Sản xuất & Kinh doanh, P Farm đã, đang và sẽ không 
               ngưng nâng cấp/ nâng cao, tối ưu hóa, mang tới nhiều tiện lợi, tiện ích nhất cũng
                như những trải nghiệm mới cho Người tiêu dùng/ Khách hàng của mình`,
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
