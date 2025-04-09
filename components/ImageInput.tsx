import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";

interface InputImageProps {
  images: string[];
  onChange: (image: string) => void;
}

export function ImageInput({ images, onChange }: InputImageProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="self-start text-gray-600 cursor-pointer"
        >
          Add a cover image
        </Button>
      </DialogTrigger>
      <DialogContent className="w-4/5 max-w-[700px] max-h-[calc(100%-100px)] overflow-y-scroll">
        <DialogHeader>
          <DialogTitle>Select Image</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-4">
          {images.map((image) => {
            return (
              <Image
                src={image}
                onClick={() => onChange(image)}
                alt="blog-image"
                className="w-full"
                width={100}
                height={100}
                key={image}
              />
            );
          })}
        </div>
      </DialogContent>
    </Dialog>
  );
}
