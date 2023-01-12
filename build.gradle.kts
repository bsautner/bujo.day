import org.jetbrains.kotlin.gradle.targets.js.webpack.KotlinWebpack

val kotlinVersion = "1.7.20-RC"
val serializationVersion = "1.4.0"
val ktorVersion = "2.1.1"
val logbackVersion = "1.4.1"
val kotlinWrappersVersion = "1.0.0-pre.386"
val kmongoVersion = "4.7.1"

plugins {
    kotlin("multiplatform") version "1.7.20-Beta"
    application
    kotlin("plugin.serialization") version "1.7.20-Beta"
}


group = "org.bujo"
version = "1.0-SNAPSHOT"

repositories {
    jcenter()
    mavenCentral()
    maven("https://maven.pkg.jetbrains.space/public/p/kotlinx-html/maven")
}



kotlin {
    jvm {
        compilations.all {
            kotlinOptions.jvmTarget = "1.8"
        }
        withJava()
        testRuns["test"].executionTask.configure {
            useJUnitPlatform()
        }
    }
    js(IR) {
        binaries.executable()
        browser {
            binaries.executable()
//            commonWebpackConfig {
//                cssSupport {
//                    enabled.set(true)
//                }
//            }
        }
    }
    sourceSets {
        val commonMain by getting {
            dependencies {
                implementation("org.jetbrains.kotlinx:kotlinx-serialization-json:$serializationVersion")
                implementation("io.ktor:ktor-client-core:$ktorVersion")
            }
        }
        val commonTest by getting {
            dependencies {
                implementation(kotlin("test-common"))
                implementation(kotlin("test-annotations-common"))
            }
        }
        val jvmMain by getting {
            dependencies {
                // https://mvnrepository.com/artifact/org.slf4j/slf4j-api
                implementation("org.slf4j:slf4j-api:2.0.6")

                // https://mvnrepository.com/artifact/com.squareup.retrofit2/retrofit
                implementation("com.squareup.retrofit2:retrofit:2.9.0")

// https://mvnrepository.com/artifact/com.squareup.okhttp/okhttp
                implementation("com.squareup.okhttp:okhttp:2.7.5")

                implementation("mysql:mysql-connector-java:8.0.29")

                implementation("io.ktor:ktor-serialization:$ktorVersion")
                implementation("io.ktor:ktor-server-content-negotiation:$ktorVersion")
                implementation("io.ktor:ktor-serialization-kotlinx-json:$ktorVersion")
                implementation("io.ktor:ktor-server-cors:$ktorVersion")
                implementation("io.ktor:ktor-server-compression:$ktorVersion")
                implementation("io.ktor:ktor-server-core-jvm:$ktorVersion")
                implementation("io.ktor:ktor-server-netty:$ktorVersion")
                implementation("ch.qos.logback:logback-classic:$logbackVersion")


                implementation("io.ktor:ktor-server-netty:2.1.1")
                implementation("io.ktor:ktor-server-html-builder-jvm:2.1.1")
                implementation("org.jetbrains.kotlinx:kotlinx-html-jvm:0.7.2")
            }
        }
        val jvmTest by getting
        val jsMain by getting {
            dependencies {
                implementation("org.jetbrains.kotlin-wrappers:kotlin-emotion:11.10.4-pre.385")
                implementation("io.ktor:ktor-client-js:$ktorVersion")
                implementation("io.ktor:ktor-client-content-negotiation:$ktorVersion")
                implementation("io.ktor:ktor-serialization-kotlinx-json:$ktorVersion")
                implementation(project.dependencies.enforcedPlatform("org.jetbrains.kotlin-wrappers:kotlin-wrappers-bom:$kotlinWrappersVersion"))
                implementation("org.jetbrains.kotlin-wrappers:kotlin-react")
                implementation("org.jetbrains.kotlin-wrappers:kotlin-react-dom")
            }
        }
        val jsTest by getting
    }
}

application {
    mainClass.set("org.bujo.application.ServerKt")
}

tasks.named<Copy>("jvmProcessResources") {
    val jsBrowserDistribution = tasks.named("jsBrowserDistribution")
    from(jsBrowserDistribution)
}

tasks.named<JavaExec>("run") {
    dependsOn(tasks.named<Jar>("jvmJar"))
    classpath(tasks.named<Jar>("jvmJar"))
}