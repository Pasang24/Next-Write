import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { deleteBlog } from "@/lib/BlogStorage";
import { DialogClose } from "@radix-ui/react-dialog";
import { Trash2 } from "lucide-react";
import { redirect } from "next/navigation";

interface DeleteBlogButtonProps {
  blogId: number;
}

export function DeleteBlogButton({ blogId }: DeleteBlogButtonProps) {
  const deleteHandler = () => {
    deleteBlog(blogId);
    redirect("/blogs");
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant={"ghost"}
          className="text-red-400 hover:text-red-400 cursor-pointer"
        >
          <Trash2 />
          Delete Blog
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[300px]">
        <DialogHeader>
          <DialogTitle>Delete Blog</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete this blog? This action cannot be
            undone.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            onClick={deleteHandler}
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
