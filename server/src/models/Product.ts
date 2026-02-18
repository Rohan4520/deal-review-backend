import mongoose, { Document, Schema } from "mongoose";

export interface IProduct extends Document {
  title: string;
  brand: string;
  category: string;
  images: string[];
  description: string;
  publicReviewOfBrand: string;
  positiveReview: number;
  negativeReview: number;
  affiliateLink: string;
  isTrending: boolean;
}

const productSchema = new Schema<IProduct>(
  {
    title: { type: String, required: true },
    brand: { type: String, required: true },
    category: { type: String, required: true },
    images: {
      type: [String],
      validate: {
        validator: (val: string[]) => val.length === 4,
        message: "Exactly 4 images required",
      },
    },
    description: { type: String, required: true },
    publicReviewOfBrand: { type: String, required: true },
    positiveReview: { type: Number, required: true },
    negativeReview: { type: Number, required: true },
    affiliateLink: { type: String, required: true },
    isTrending: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model<IProduct>("Product", productSchema);
