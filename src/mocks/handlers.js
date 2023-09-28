import { response, rest } from "msw";

const baseURL = "https://drf-apii-eb74b6f7eea1.herokuapp.com/";

export const handlers = [
  rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
    return res(
      ctx.json({
        pk: 5,
        username: "magic",
        email: "",
        first_name: "",
        last_name: "",
        profile_id: 5,
        profile_image:
          "https://res.cloudinary.com/dsmfunyxk/image/upload/v1/media/images/IMG_2176_2_yvaftj",
      })
    );
  }),
  rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
    return response(ctx.status(200));
  }),
];
