import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ArrowRightLeft, X } from "lucide-react";
import CustomImage from "./CustomImage";

interface InputImageProps {
  currentImage: string;
  images: string[];
  onChange: (image: string) => void;
}

export function ImageInput({
  currentImage,
  images,
  onChange,
}: InputImageProps) {
  return (
    <div className="flex flex-col items-center gap-6 sm:flex-row">
      {currentImage && (
        <CustomImage
          src={currentImage}
          alt="blog-image"
          width={300}
          height={168}
        />
      )}
      <div className="flex gap-2">
        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              className="self-start text-gray-600 cursor-pointer"
            >
              {currentImage ? (
                <>
                  <ArrowRightLeft />
                  Change
                </>
              ) : (
                <>Add a cover image</>
              )}
            </Button>
          </DialogTrigger>
          <DialogContent className="w-4/5 max-w-[700px] max-h-[calc(100vh-100px)] overflow-y-auto no-scrollbar">
            <DialogHeader>
              <DialogTitle>Select Image</DialogTitle>
            </DialogHeader>
            <div className="grid grid-cols-2 gap-4">
              {images.map((image) => {
                return (
                  <DialogClose key={image} asChild>
                    <div className="overflow-hidden">
                      <CustomImage
                        src={image}
                        onClick={() => onChange(image)}
                        alt="blog-image"
                        className="w-full cursor-pointer hover:scale-110 transition"
                        width={100}
                        height={56}
                      />
                    </div>
                  </DialogClose>
                );
              })}
            </div>
          </DialogContent>
        </Dialog>
        {currentImage && (
          <Button
            onClick={() => onChange("")}
            variant="outline"
            className="text-red-400 hover:text-red-400 cursor-pointer"
          >
            <X />
            Remove
          </Button>
        )}
      </div>
    </div>
  );
}
