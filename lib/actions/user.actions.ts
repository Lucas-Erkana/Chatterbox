"use server";

import { connectToDB } from "../mongoose";

export async function updateUser():Promise<void> {
  connectToDB();

  
}