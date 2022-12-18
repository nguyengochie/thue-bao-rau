import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Product5 from "assets/image/rau5.jpeg";
import Product6 from "assets/image/rau10.jpeg";

const POSTS = [
  {
    img: "https://www.morrisons-farming.com/contentassets/f9e4d9e64848470aa4b7d81af4e7ff67/istock-901653798.jpg",
    title: "Rau củ mùa lạnh - Lưu ý với tác dụng làm ấm cơ thể",
    content: `90% người tiêu dùng không biết thực phẩm khi kết hợp đúng có tác dụng làm ấm cơ thể - hiệu quả hơn rất nhiều việc choàng thêm 1 chiếc khăn. Đặc biệt với những loại rau và thịt có tác dụng trừ phong tán hàn, thúc đẩy tuần hoàn máu, tăng thân nhiệt.`,
  },
  {
    img: "https://media.istockphoto.com/id/1251268131/photo/senior-man-with-bunch-of-freshly-harvested-carrots.jpg?s=612x612&w=0&k=20&c=N-xOciVFINYbPDf0FzV1tjwtfnc7gYEMW2TpW8h3bCg=",
    title:
      "Các loại rau sắp xuất hiện tại Fresh Market - Gói thuê bao nay còn phong phú nữa!",
    content: `Rau xanh ngon sạch không chỉ phụ thuộc vào mùa vụ và thời tiết, mà còn cả bàn tay sáng tạo của những người làm nông. Áp dụng công nghệ mới như nhà lưới, phương thức canh tác và giống mới gần đây đã và đang giúp từng gói rau tới khách hàng không chỉ ngon sạch mà còn phong phú với những loại rau ngon như "chính vụ"`,
  },
  {
    img: "https://img.freepik.com/free-photo/organic-food-farm_342744-1362.jpg?w=2000",
    title: "Ăn gì hợp với rau cải cúc mùa đông?",
    content: `Rau cải cúc là loại rau được rất nhiều yêu thích vì có hương vị ngon, dễ ăn. Cải cúc thường được mọi người sử dụng để nấu canh hoặc ăn lẩu.
    Trong Đông y, cải cúc có vị ngọt nhạt, hơi đắng, the, mùi thơm, tính mát, vị tê, không độc. Nó có tác dụng hòa tỳ vị, an tâm khí, lợi tiểu, tiêu hóa`,
  },
];

const News = () => {
  const renderPost = () => {
    return POSTS.map((item) => {
      return (
        <Box style={{ display: "flex", gap: "20px", padding: 10 }}>
          <img
            src={item.img}
            alt=""
            style={{ height: "200px", width: "300px" }}
          />
          <Box style={{ textAlign: "start" }}>
            <Typography
              fontSize={18}
              fontWeight={700}
              style={{ marginBottom: 10, fontFamily: "Roboto" }}
            >
              {item.title}
            </Typography>
            <Typography style={{ lineHeight: "25px" }}>
              {item.content}
            </Typography>
          </Box>
        </Box>
      );
    });
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
          width: "80vw",
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
          {renderPost()}
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
            <Box
              style={{
                display: "flex",
                gap: "10px",
                textAlign: "start",
                marginBottom: "10px",
              }}
            >
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
                  flex: 1,
                }}
              >
                Thực phẩm biến đổi gen ở Việt Nam được bộ nông nghiệp cấp phép
              </Typography>
            </Box>

            <Box
              style={{
                display: "flex",
                gap: "10px",
                textAlign: "start",
                marginBottom: "10px",
              }}
            >
              <img
                src="https://i.doanhnhansaigon.vn/2021/10/23/21cthtchalnhthcphmthayicucsng47-1634974218_750x0.png"
                alt=""
                style={{ borderRadius: "50%", height: 45, width: 45 }}
              />
              <Typography
                style={{
                  fontWeight: "bold",
                  fontFamily: "Roboto",
                  fontSize: "14px",
                  flex: 1,
                }}
              >
                Cơ thể tự chữa lành: Thực phẩm thay đổi cuộc sống
              </Typography>
            </Box>

            <Box
              style={{
                display: "flex",
                gap: "10px",
                textAlign: "start",
                marginBottom: "10px",
              }}
            >
              <img
                src="https://cdn.tuoitre.vn/thumb_w/730/2018/12/7/photo-1-15441744578171493266039.jpg"
                alt=""
                style={{ borderRadius: "50%", height: 45, width: 45 }}
              />
              <Typography
                style={{
                  fontWeight: "bold",
                  fontFamily: "Roboto",
                  fontSize: "14px",
                  flex: 1,
                }}
              >
                Dinh dưỡng: Bí quyết để cải thiện sức khỏe
              </Typography>
            </Box>
            <Box
              style={{
                display: "flex",
                gap: "10px",
                textAlign: "start",
                marginBottom: "10px",
              }}
            >
              <img
                src="https://file.hstatic.net/200000170631/file/thuc-pham-thuan-tu-nhien_df548b3714984f60858b8c219614af84.jpg"
                alt=""
                style={{ borderRadius: "50%", height: 45, width: 45 }}
              />
              <Typography
                style={{
                  fontWeight: "bold",
                  fontFamily: "Roboto",
                  fontSize: "14px",
                  flex: 1,
                }}
              >
                Ăn Uống Thuận Tự Nhiên: Bí Kíp Cho Cơ Thể Khỏe Mạnh
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default News;
