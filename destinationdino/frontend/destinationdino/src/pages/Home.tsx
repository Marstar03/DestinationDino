import React, { useState, useEffect } from 'react';
import DestinationGrid from '../components/DestinationGrid';
import { getRequest } from '../httpMethods/getRequest';

export default function Home() {
    const apiUrl = 'http://localhost:8080/destinations';
    const { data: destinations, loading, error } = getRequest(apiUrl);

    if (loading) {
        return <div>Loading destinations...</div>;
    }

    if (error) {
        return <div>Error fetching destinations: {error}</div>;
    }

    return (
        <div>
            <h2>Destinations</h2>
            <DestinationGrid destinations={destinations} />
        </div>
    );
}

