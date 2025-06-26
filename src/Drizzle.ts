import * as PgDrizzle from '@effect/sql-drizzle/Pg'
import type { PgRemoteDatabase } from 'drizzle-orm/pg-proxy'
import { Context, Layer } from 'effect'

const CONTEXT_KEY = '@/Drizzle'

type Service = PgRemoteDatabase

export class Drizzle extends Context.Tag(CONTEXT_KEY)<Drizzle, Service>() {
	static layerWithoutDependencies() {
		return Layer.effect(this, PgDrizzle.make({ casing: 'snake_case' }))
	}
}
