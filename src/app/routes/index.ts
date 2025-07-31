import express from "express";
import { UserRoutes } from "../module/User/user.routes";
import { ProfileRoutes } from "../module/Profile/profile.routes";
import { AuthRoutes } from "../module/Auth/auth.routes";
import { PostRoutes } from "../module/Post/post.routes";
import { CommentRoutes } from "../module/Comment/comment.routes";
import { ReactRoutes } from "../module/Reacts/react.routes";
import { MessageRoutes } from "../module/Messages/message.routes";
import { ChatRoutes } from "../module/Chat/chat.routes";
import { PaymentRoutes } from "../module/payment/payment.routes";
import { StoryRoutes } from "../module/Story/story.routes";
import { ReviewRoutes } from "../module/Review/review.routes";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/auth",
    route: AuthRoutes,
  },
  {
    path: "/users",
    route: UserRoutes,
  },
  {
    path: "/profile",
    route: ProfileRoutes,
  },
  {
    path: "/posts",
    route: PostRoutes,
  },
  {
    path: "/comments",
    route: CommentRoutes,
  },
  {
    path: "/react",
    route: ReactRoutes,
  },
  {
    path: "/payment",
    route: PaymentRoutes,
  },
  {
    path: "/chats",
    route: ChatRoutes,
  },
  {
    path: "/messages",
    route: MessageRoutes,
  },
  {
    path: "/stories",
    route: StoryRoutes,
  },
  {
    path: "/reviews",
    route: ReviewRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
