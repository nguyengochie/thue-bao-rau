import { useEffect } from "react";
import { Box } from "@mui/system";
import React from "react";
import { useStyles } from "./style";
import Typography from "@mui/material/Typography";
import { Tab, Tabs } from "@mui/material";
import { ARTICLE1 } from "./const";

const BG_STORY =
  "https://img.freepik.com/premium-photo/tasty-juicy-ripe-vegetables-with-spices-wooden-background-vegetable-background-healthy-eating-concept_380733-1559.jpg?w=2000";
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
const Story = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const a11yProps = (index: number) => {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  };

  const TabPanel = (props: TabPanelProps) => {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  };

  // useEffect(() => {
  //   renderArticle();
  // }, []);

  return (
    <Box
      className={classes.root}
      style={{
        minHeight: "calc(100vh - 80px)",
        background: `url('${BG_STORY}') no-repeat`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <Box
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          width: "70%",
          justifyContent: "center",
          boxSizing: "border-box",
          padding: "50px 0",
          // height: "200vh",
        }}
      >
        <Box
          bgcolor="primary.main"
          style={{ width: "300px", height: "fit-content", padding: "10px 0" }}
        >
          <Tabs
            orientation="vertical"
            variant="standard"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            sx={{ borderRight: 1, borderColor: "divider" }}
          >
            <Tab
              classes={{
                selected: classes.tabSelected,
                root: classes.tabRoot,
              }}
              label="Giới Thiệu"
              {...a11yProps(0)}
            />
            <Tab
              classes={{
                selected: classes.tabSelected,
                root: classes.tabRoot,
              }}
              label="Cơ cấu tổ chức"
              {...a11yProps(1)}
            />
            <Tab
              classes={{
                selected: classes.tabSelected,
                root: classes.tabRoot,
              }}
              label="Đối tác"
              {...a11yProps(2)}
            />
            <Tab
              classes={{
                selected: classes.tabSelected,
                root: classes.tabRoot,
              }}
              label="Xứ mệnh"
              {...a11yProps(2)}
            />
          </Tabs>
        </Box>
        <Box bgcolor="#ffff" style={{ width: "100%", height: "100%" }}>
          <TabPanel value={value} index={0}>
            <Box
              id="article-content"
              dangerouslySetInnerHTML={{ __html: ARTICLE1 }}
            ></Box>
          </TabPanel>
          <TabPanel value={value} index={1}>
            Item Two
          </TabPanel>
          <TabPanel value={value} index={2}>
            Item Three
          </TabPanel>
        </Box>
      </Box>
    </Box>
  );
};
export default Story;
