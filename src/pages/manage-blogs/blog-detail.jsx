import { Card, Grid, Typography } from "@mui/material";

const BlogDetail = () => {
  return (
    <div className="px-5">
      <Grid container className="mt-5" spacing={4}>
        <Grid item md={12}>
          <img
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTinGCfuvtIzNvb6AsRFE7LtRJrTEKDxVxe6g&s"
            }
            style={{ width: "100%", height: 500, borderRadius: 12 }}
          />
        </Grid>
        <Grid item md={8}>
          <Typography variant="h4">
            Housing Bubble 2024: Are housing Market Crashing?
          </Typography>
          <div className="mt-3">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <p>
              The standard chunk of Lorem Ipsum used since the 1500s is
              reproduced below for those interested. Sections 1.10.32 and
              1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
              reproduced in their exact original form, accompanied by English
              versions from the 1914 translation by H. Rackham.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia
              animi, id est laborum et dolorum fuga. Et harum quidem rerum
              facilis est et expedita distinctio. Nam libero tempore, cum soluta
              nobis est eligendi optio cumque nihil impedit quo minus id quod
              maxime placeat facere possimus, omnis voluptas assumenda est,
              omnis dolor repellendus. Temporibus autem quibusdam et aut
              officiis debitis aut rerum necessitatibus saepe eveniet ut et
              voluptates repudiandae sint et molestiae non recusandae. Itaque
              earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
              voluptatibus maiores alias consequatur aut perferendis doloribus
              asperiores repellat
            </p>
          </div>
        </Grid>
        <Grid item md={4} mt={3}>
          <Typography variant="h6">Related Blogs</Typography>

          <Card
            style={{ border: "1px solid  #E8E8E8", borderRadius: 5 }}
            className="p-3 mt-3"
          >
            <div className="d-flex align-items-center gap-2">
              <img
                src={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTinGCfuvtIzNvb6AsRFE7LtRJrTEKDxVxe6g&s"
                }
                style={{ height: 70, width: 70, borderRadius: 5 }}
              />
              <Typography variant="body2">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium
              </Typography>
            </div>
          </Card>
          <Card
            style={{ border: "1px solid  #E8E8E8", borderRadius: 5 }}
            className="p-3 mt-3"
          >
            <div className="d-flex align-items-center gap-2">
              <img
                src={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTinGCfuvtIzNvb6AsRFE7LtRJrTEKDxVxe6g&s"
                }
                style={{ height: 70, width: 70, borderRadius: 5 }}
              />
              <Typography variant="body2">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium
              </Typography>
            </div>
          </Card>
          <Card
            style={{ border: "1px solid  #E8E8E8", borderRadius: 5 }}
            className="p-3 mt-3"
          >
            <div className="d-flex align-items-center gap-2">
              <img
                src={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTinGCfuvtIzNvb6AsRFE7LtRJrTEKDxVxe6g&s"
                }
                style={{ height: 70, width: 70, borderRadius: 5 }}
              />
              <Typography variant="body2">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium
              </Typography>
            </div>
          </Card>
          <Card
            style={{ border: "1px solid  #E8E8E8", borderRadius: 5 }}
            className="p-3 mt-3"
          >
            <div className="d-flex align-items-center gap-2">
              <img
                src={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTinGCfuvtIzNvb6AsRFE7LtRJrTEKDxVxe6g&s"
                }
                style={{ height: 70, width: 70, borderRadius: 5 }}
              />
              <Typography variant="body2">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium
              </Typography>
            </div>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default BlogDetail;
