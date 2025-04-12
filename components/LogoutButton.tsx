import { redirect } from "next/navigation";
import { Button } from "./ui/button";
import { LogOut } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";

function LogoutButton() {
  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    redirect("/login");
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="text-base cursor-pointer font-normal"
          variant={"ghost"}
        >
          <LogOut />
          <span className="hidden xs:block">Logout</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[90%] max-w-[300px]">
        <DialogHeader>
          <DialogTitle>Confirm Logout</DialogTitle>
          <DialogDescription>
            Are you sure you want to logout?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            onClick={logoutHandler}
            variant={"destructive"}
            className="cursor-pointer"
          >
            Confirm
          </Button>
          <DialogClose asChild>
            <Button className="cursor-pointer">Cancel</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default LogoutButton;
