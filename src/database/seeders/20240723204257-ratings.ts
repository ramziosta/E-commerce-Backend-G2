'use strict';
//2
//amr

import { DataTypes, QueryInterface } from 'sequelize';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface: QueryInterface, Sequelize: typeof DataTypes) {
        await queryInterface.bulkInsert('Ratings', [
            {
                productId: 1,
                userId: 1,
                rating: 3,
                comments: 'good',
                review: 'newnewnew',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                productId: 1,
                userId: 2,
                rating: 4,
                comments: 'ok',
                review: 'ok',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                productId: 1,
                userId: 2,
                rating: 5,
                comments: 'not bad',
                review: 'newnewnew',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                productId: 2,
                userId: 1,
                rating: 5,
                comments: 'good',
                review: 'newnewnew',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                productId: 2,
                userId: 2,
                rating: 5,
                comments: 'good',
                review: 'newnewnew',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                productId: 2,
                userId: 3,
                rating: 5,
                comments: 'good',
                review: 'newnewnew',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                productId: 6,
                userId: 4,
                rating: 1,
                comments: 'bad',
                review: 'newnewnew',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                productId: 6,
                userId: 3,
                rating: 1,
                comments: 'bad',
                review: 'newnewnew',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                productId: 7,
                userId: 2,
                rating: 5,
                comments: 'good',
                review: 'newnewnew',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                productId: 7,
                userId: 4,
                rating: 5,
                comments: 'good',
                review: 'newnewnew',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                productId: 7,
                userId: 7,
                rating: 5,
                comments: 'good',
                review: 'newnewnew',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                productId: 6,
                userId: 2,
                rating: 3,
                comments: 'worse',
                review: 'newnewnew',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                productId: 6,
                userId: 1,
                rating: 2,
                comments: 'bad',
                review: 'newnewnew',
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ]);
    },
    async down(queryInterface: QueryInterface, Sequelize: typeof DataTypes) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    }
};
