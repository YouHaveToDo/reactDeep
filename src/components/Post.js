import React from "react";
import { Grid, Image, Text, Button } from "../elements";
import { history } from "../redux/configureStore";

const Post = (props) => {
  return (
    <React.Fragment>
      <Grid>
        <Grid is_flex padding="16px">
          <Grid is_flex width="auto">
            <Image shape="circle" src={props.src} />
            <Text bold>{props.user_info.user_name}</Text>
          </Grid>
          <Grid is_flex width="auto">
            {props.is_me && (
              <Button
                width="auto"
                padding="4px"
                margin="4px"
                _onClick={() => {
                  history.push(`/write/${props.id}`);
                }}
              >
                수정
              </Button>
            )}
            <Text>{props.insert_dt}</Text>
          </Grid>
        </Grid>
        <Grid padding="16px">
          <Text>{props.contents}</Text>
        </Grid>
        <Grid>
          <Image shape="rectangle" src={props.image_url} />
        </Grid>
        <Grid padding="16px">
          <Text margin="0px" bold>
            댓글 {props.comment_cnt}개
          </Text>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

Post.defaultProps = {
  user_info: {
    user_name: "jung",
    user_profile:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThXEnj2bS1l5_vdRj2OwijiP10LECiWVm-lg&usqp=CAU",
  },
  image_url:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThXEnj2bS1l5_vdRj2OwijiP10LECiWVm-lg&usqp=CAU",
  contents: "김웅용 교수",
  comment_cnt: 10,
  insert_dt: "2021-02-27 10:00:00",
};

export default Post;
