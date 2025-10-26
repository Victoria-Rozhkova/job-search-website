import React from "react";

import { Accordion, Card, Icon, Link, Upload } from "@/shared/ui";
import useAuth from "@/shared/hooks/use-auth";
import { UpdateAvatar } from "@/features/update-avatar";
import { FileItem } from "@/shared/model/types/common.type";
import { useUpdateProfileMutation } from "@/shared/model/api/user.api";
import { setStorage } from "@/shared/hooks/use-storage";
import EditableDiv from "@/features/editable-div";

const LeftLayoutBlock = () => {
  const auth = useAuth();

  const [updateProfile] = useUpdateProfileMutation();

  function changeAvatar(avatar: FileItem) {
    if (auth.user?.id) {
      updateProfile({ id: auth.user?.id, avatar })
        .unwrap()
        .then((user) => {
          setStorage("user:LI", user);
          auth.setUser();
        });
    }
  }

  function changeStatus(status: string) {
    if (auth.user?.id) {
      updateProfile({ id: auth.user?.id, status })
        .unwrap()
        .then((user) => {
          setStorage("user:LI", user);
          auth.setUser();
        });

    }
  }

  function deleteAvatar() {
    if (auth.user?.id) {
      updateProfile({ id: auth.user?.id, avatar: null })
        .unwrap()
        .then((user) => {
          setStorage("user:LI", user);
          auth.setUser();
        });
    }
  }

  return (
    <div>
      <Card customStyles="mb-[21px]">
        <div
          className="relative"
          style={{
            background:
              "linear-gradient(180deg, rgba(52,86,255,1) 99px, rgba(255,255,255,1) 99px 100%)",
          }}
        >
          <div className="pt-[46px] flex justify-center">
            <Upload
              elem={<UpdateAvatar onDelete={deleteAvatar} />}
              accept=".png, .jpg, .jpeg"
              drag={false}
              value={null}
              url={auth.user?.avatar?.data_url}
              onChange={changeAvatar}
            />
          </div>
          <div className="pt-[11px]">
            <h3 className="text-center text-pri1 text-ro14med">
              {`${auth.user?.firstname || "No firstname"} ${
                auth.user?.lastname || "No lastname"
              }`}
            </h3>
          </div>
          <EditableDiv text={auth.user?.status || ""} onSubmit={changeStatus} />
          <div className="flex gap-[12px] justify-center items-center pb-[24px]">
            <div className="flex flex-col items-center gap-[5px]">
              <p className="text-pri1 text-ro14med">Profile Views</p>
              <p className="text-pri2 text-ro14reg">16+</p>
            </div>
            <div className="flex flex-col items-center gap-[5px]">
              <p className="text-pri1 text-ro14med">Profile Post</p>
              <p className="text-pri2 text-ro14reg">400+</p>
            </div>
          </div>
          <div className="flex items-center justify-around pb-[38px]">
            <div className="flex gap-[3px] items-center">
              <Icon
                name="Bookmark"
                className="bg-secondary hover:bg-primary rounded-[15px] p-[7px] text-white"
              />
              <span className="text-ro12reg text-pri2">Saved</span>
            </div>
            <div className="flex gap-[3px] items-center">
              <Icon
                name="Award"
                className="bg-secondary hover:bg-primary  rounded-[15px] p-[7px]"
              />
              <span className="text-ro12reg text-pri2">Try Premium</span>
            </div>
          </div>
        </div>
      </Card>
      <Card>
        <div className="pt-[32px] px-[22px] pb-[54px]">
          <div className="mb-[5px]">
            <Accordion title="Groups">
              <div>
                <div className="flex gap-[5px] items-center">
                  <Icon name="Peoples" size={13} />
                  <span>UI/UX Design</span>
                </div>
                <div className="flex gap-[5px] items-center">
                  <Icon name="Peoples" size={13} />
                  <span>UI Design</span>
                </div>
                <div className="flex gap-[5px] items-center">
                  <Icon name="Peoples" size={13} />
                  <span>UI Design</span>
                </div>
                <Link to="" title="More" />
              </div>
            </Accordion>
          </div>
          <div className="mb-[26px]">
            <Accordion title="Event">
              <div>
                <div className="flex gap-[5px] items-center">
                  <Icon name="Calendar" size={13} />
                  <span>Webinar UI Design at 09:00 am.</span>
                </div>
              </div>
            </Accordion>
          </div>
          <Accordion title="Followed Hastag">
            <div>
              <div className="flex gap-[5px] items-center">
                #UIDesign #UIUXDesign #UIRemote #wfh #RemoteWork #UXDesign
                #jobsUIDesign #Userexperince #UIUXDesign
              </div>
            </div>
          </Accordion>
        </div>
      </Card>
    </div>
  );
};

export default LeftLayoutBlock;
