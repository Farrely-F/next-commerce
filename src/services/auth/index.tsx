import instance from "@/lib/axios/instance";

const authServices = {
  registerAcount: (data: any) => instance.post("/api/user/register", data),
};

export default authServices;
