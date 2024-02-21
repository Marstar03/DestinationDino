import { useState, useEffect } from 'react';

export async function buttonGetRequest(apiUrl: string) {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return { data, loading: false, error: null };
    } catch (error) {
        return { data: null, loading: false, error: error.message };
    }
}
