'use client'

import { useAuth } from "@/src/context/AuthContext"

export default function EditProfile() {
    const {user} = useAuth();
    return (
        <div>
            <h1>This is user edit profile route</h1>
        </div>
    )
}