"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { addYouTubeLink } from "@/lib/firebase-service";
import { YouTubeLinkCategory } from "@/lib/types";
import { toast } from "sonner";

const formSchema = z.object({
  url: z.string().url("Please enter a valid YouTube URL"),
  title: z.string().min(1, "Title is required"),
  category: z.string().min(1, "Category is required"),
});

type FormData = z.infer<typeof formSchema>;

export default function AdminPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const { register, handleSubmit, reset, setValue, watch, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const onSubmit = async (data: FormData) => {
    try {
      setIsLoading(true);
      await addYouTubeLink({
        ...data,
        category: data.category as YouTubeLinkCategory,
        addedBy: "admin",
      });
      toast.success("Sermon video added successfully");
      reset();
    } catch (error) {
      toast.error("Failed to add sermon video");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isMounted) {
    return null; // or a loading spinner
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      
      <div className="max-w-2xl bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Add Sermon Video</h2>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">YouTube URL</label>
            <Input
              {...register("url")}
              placeholder="https://www.youtube.com/watch?v=..."
              className={errors.url ? "border-red-500" : ""}
            />
            {errors.url && (
              <p className="text-red-500 text-sm mt-1">{errors.url.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Title</label>
            <Input
              {...register("title")}
              placeholder="Enter video title"
              className={errors.title ? "border-red-500" : ""}
            />
            {errors.title && (
              <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Category</label>
            <Select
              value={watch("category")}
              onValueChange={(value) => setValue("category", value, { shouldValidate: true })}
            >
              <SelectTrigger className={errors.category ? "border-red-500" : ""}>
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Faith">Faith</SelectItem>
                <SelectItem value="Grace">Grace</SelectItem>
                <SelectItem value="Love">Love</SelectItem>
                <SelectItem value="Hope">Hope</SelectItem>
                <SelectItem value="Salvation">Salvation</SelectItem>
                <SelectItem value="Prayer">Prayer</SelectItem>
              </SelectContent>
            </Select>
            {errors.category && (
              <p className="text-red-500 text-sm mt-1">{errors.category.message}</p>
            )}
          </div>

          <Button type="submit" disabled={isLoading} className="w-full">
            {isLoading ? "Adding..." : "Add Sermon Video"}
          </Button>
        </form>
      </div>
    </div>
  );
}
