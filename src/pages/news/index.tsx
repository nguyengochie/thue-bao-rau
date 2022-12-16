import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const POST_1 = {
  img: "https://www.morrisons-farming.com/contentassets/f9e4d9e64848470aa4b7d81af4e7ff67/istock-901653798.jpg",
  title: "Đánh giá khách hàng: Hữu ích, vui vẻ, ngon và sạch",
  content: `Là đơn vị bán hàng online, tôi rất hài lòng với giao diện của
  Freshmarket, Freshmarket thu hút được rất nhiều khách hàng. Cảm ơn
  đội ngũ chăm sóc khách hàng tận tình...`,
};

const News = () => {
  const renderPost = ({
    img,
    title,
    content,
  }: {
    img: string;
    title: string;
    content: string;
  }) => {
    return (
      <Box style={{ display: "flex", gap: "20px", padding: 10 }}>
        <img src={img} alt="" style={{ height: "200px", width: "300px" }} />
        <Box style={{ textAlign: "start" }}>
          <Typography
            fontSize={18}
            fontWeight={700}
            style={{ marginBottom: 10, fontFamily: "Roboto" }}
          >
            {title}
          </Typography>
          <Typography style={{ lineHeight: "25px" }}>{content}</Typography>
        </Box>
      </Box>
    );
  };
  return (
    <Box
      style={{
        backgroundColor: "#f7f8fa",
        textAlign: "center",
        minHeight: "100vh",
        padding: "30px 0",
      }}
    >
      <Box
        style={{
          width: "70vw",
          display: "flex",
          margin: "auto",
          height: "100%",
          gap: "30px",
        }}
      >
        <Box
          style={{
            backgroundColor: "#ffff",
            width: "100%",
            height: "100%",
            padding: 20,
          }}
        >
          <Box
            style={{
              borderBottom: "1px solid #e5e5e5",
              textAlign: "start",
            }}
          >
            <Typography
              color="primary.main"
              fontWeight={700}
              fontSize={20}
              style={{ marginLeft: 10 }}
            >
              Bài viết mới nhật ký
            </Typography>
          </Box>
          {renderPost({
            img: POST_1.img,
            title: POST_1.title,
            content: POST_1.content,
          })}
          {renderPost({
            img: POST_1.img,
            title: POST_1.title,
            content: POST_1.content,
          })}
          {renderPost({
            img: POST_1.img,
            title: POST_1.title,
            content: POST_1.content,
          })}
        </Box>
        <Box
          style={{
            backgroundColor: "#ffff",
            width: 500,
            height: "100%",
          }}
        >
          <Box
            style={{
              borderBottom: "1px solid #e5e5e5",
              textAlign: "start",
              padding: 10,
            }}
          >
            <Typography
              color="primary.main"
              fontWeight={700}
              fontSize={16}
              fontFamily="Roboto"
            >
              Góc Tâm Vui Vẻ
            </Typography>
          </Box>
          <Box style={{ padding: 10 }}>
            <Box style={{ display: "flex", gap: "10px", textAlign: "start" }}>
              <img
                src="https://pfarm.vn/wp-content/themes/pfarm/images/No_Image.png"
                alt=""
                style={{ borderRadius: "50%", height: 45, width: 45 }}
              />
              <Typography
                style={{
                  fontWeight: "bold",
                  fontFamily: "Roboto",
                  fontSize: "14px",
                }}
              >
                Thực phẩm biến đổi gen ở Việt Nam được bộ nông nghiệp cấp phép
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default News;
